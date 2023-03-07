/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ["./*.{html,js}"],
    content: ["./*.{html,js}"],
    theme: {
    extend: {
      colors: {
        'cus-blue': '#1B244A'
      },
      width: {
        '128': '32rem',
      },
      backgroundImage: {
        'bella': "url('../Tindogg/images/dog-bella.jpg')",
      },
      backgroundImage: {
        'rex': "url('../Tindogg/images/dog-rex.jpg')",
      },
      backgroundImage: {
        'teddy': "url('../Tindogg/images/dog-teddy.jpg')",
      },
    fontFamily:{
      tindog: ['poppins','sans-serif']
    }
    },
  },
  plugins: [],
}
