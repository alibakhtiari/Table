const colors = require('tailwindcss/colors')
module.exports = {
    // purge: {
    //   enabled: true,
    //   content:['./*.html']
    // },
    purge: ['./*.html'],
    darkMode: false, // or 'media' or 'class'
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