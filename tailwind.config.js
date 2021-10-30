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