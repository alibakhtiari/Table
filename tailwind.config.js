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
            '2xl': {'max': '1535px'},
      
            'xl': {'max': '1279px'},
      
            'lg': {'max': '1024px'},
      
            'md': {'max': '768px'},

            'sm': {'max': '480px'},

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