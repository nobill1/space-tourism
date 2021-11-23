module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {    
    extend: {
      colors: {
        dark: "#0B0D17",
        tone: "#D0D6F9",
        grayish: "#151923"        
      },
      fontFamily: {
        serif: ['Bellefair', 'serif'],
        sans: ['Barlow Condensed', 'sans-serif']
      },
      fontSize: {
        xs: ['15px', {
          lineHeight: '25px',
        }],
        "vs": ['16px', {
          lineHeight: '28px',
        }],
        sm: ['18px', {
          lineHeight: '32px',
        }],
      },
      screens: {
        'm2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'mxl': {'max': '1440px'},
        // => @media (max-width: 1279px) { ... }
  
        'mlg': {'max': '1024px'},
        // => @media (max-width: 1023px) { ... }
  
        'mmd': {'max': '983px'},
        // => @media (max-width: 983px) { ... }

        'msm': {'max': '569px'},
        // => @media (max-width: 569px) { ... }
  
        'mxs': {'max': '425px'},
        // => @media (max-width: 425px) { ... }

        md: {'min': '983px'},
        // => @media (max-width: 983px) { ... }

        sm: {'min': '569px'},
        // => @media (min-width: 569px) { ... }  
        
        xs: {'min': '425px'},
        // => @media (min-width: 425px) { ... }
      },
      backgroundImage: {
        'home-mobile': "url('/assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('/assets/home/background-home-tablet.jpg')",
        'home-desktop': "url('/assets/home/background-home-desktop.jpg')",
        'destination-mobile': "url('/assets/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('/assets/destination/background-destination-tablet.jpg')",
        'destination-desktop': "url('/assets/destination/background-destination-desktop.jpg')",
        'crew-mobile': "url('/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('/assets/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('/assets/crew/background-crew-desktop.jpg')",
        'technology-mobile': "url('/assets/technology/background-technology-mobile.jpg')",
        'technology-tablet': "url('/assets/technology/background-technology-tablet.jpg')",
        'technology-desktop': "url('/assets/technology/background-technology-desktop.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
