const colors = require('tailwindcss/colors')
module.exports = {

    purge: {
        enabled: true,
        content:[
        './*.html',
        './**/*.js',
    ],
    },
    darkMode: false,
    theme: {
        screens: {
            '2xl': {'min': '1535px'},
      
            'xl': {'min': '1279px'},
      
            'lg': {'max': '1024px'},
      
            'md': {'max': '768px'},

            'sm': {'min': '320px' , 'max': '480px'},

          },
        extend: {
            colors: {
                fuchsia: colors.fuchsia,
                cyan: colors.cyan,
                emerald: colors.emerald,
                teal: colors.teal,
                orange: colors.orange
            },
            container: {
                center: true,
            },
        },
    },
    variants: {
        extend: {
            tableLayout: ['hover', 'focus'],
            backgroundColor: ['odd'],
            padding: ['hover'],
        },
    },
    plugins: [],
}