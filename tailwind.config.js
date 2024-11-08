module.exports = {
  content: [
    "./src/**/*.{html,js}",  
    "./*.{html,js}",         
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px', 
        'md': '768px', 
        'lg': '1024px', 
        'xl': '1280px', // إضافة كسر XL
        '2xl': '1536px', // إضافة كسر 2XL
      },
    },
  },
  plugins: [],
};
