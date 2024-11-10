const apiKey = '82c94835cb3a436b815907f62836deca';
let city = 'Jeddah';
const cardContainer = document.getElementById('container-cards');

async function getWeatherInformation() {
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKey}&lang=en`;
  const response = await fetch(url);
  const json = await response.json();
  const data = json.data
  return data
}

async function displayWeatherInformation() {
  const data = await getWeatherInformation();

  for (let i = 0; i < 7; i++) {
    let today = data[i];

    let datetime = today.datetime;
    datetime = datetime.replace(":", "T"); 
    const date = new Date(datetime); 
    const options = { weekday: 'long' };
    const dayName = date.toLocaleDateString('en-US', options);

    const card =
    `
      <!-- card -->
        <div class=" bg-slate-50 w-32 sm:w-48 h-96 p-1 sm:p-2 rounded-md">
        <!-- card location -->
          <div class="text-black font-bold flex items-center justify-center h-11 mb-3 ">
            <h1>${city}</h1>
        </div>
      <!-- end card location -->

      <!-- card icon -->
        <div class= "flex flex-col items-center justify-center mb-3 ">
          <img src="https://www.weatherbit.io/static/img/icons/${today.weather.icon}.png" alt="${today.weather.description}">
          <h3 class="font-bold text-2xl">${today.temp}C</h3>
        </div>
      <!-- end card icon -->

      <!-- card info -->
        <div class=" bg-gray-700 text-white flex flex-col justify-center  h-36 p-2 rounded-md">
          <div class="flex items-center justify-between font-bold">
            <h2 class="text-sm">Humidity:</h2>
            <h2 class="text-sky-500 text-sm"  >${today.rh}%</h2>
        </div>

        <div class="flex items-center justify-between font-bold ">
          <h6 class="text-sm">W/S:</h6>
          <h6 class="text-sky-500 text-sm">${today.wind_spd}m/s</h6>
        </div>

        <div class=" flex items-center justify-between mt-10 font-bold">
          <h1>day:</h1>
          <h2 class="text-sky-500 text-sm">${dayName}</h2>
        </div>
        </div>
      <!-- end card info -->
      </div>
    <!-- end card -->
    `

    cardContainer.innerHTML += card
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const citySelect = document.getElementById('city-select');
  citySelect.value = 'Jeddah'; 
});

async function wetherCity(cityName) {
  city = cityName; 
  cardContainer.innerHTML = '';
  displayWeatherInformation(); 
}

cardContainer.innerHTML = '';
displayWeatherInformation();