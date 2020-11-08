const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
    purge: false,
    theme: {
        colors: {
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            blue: colors.blue,
            'primary': 'var(--bg-primary)',
            'secondary': 'var(--bg-secondary)',
            'ternary': 'var(--bg-ternary)',
        },
        textColor: {
            'primary': 'var(--text-primary)',
            'secondary': 'var(--text-secondary)',
            'ternary': 'var(--text-ternary)',
        },
        borderColor: {
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            blue: colors.blue,
            'primary': 'var(--border-primary)',
            'secondary': 'var(--border-secondary)',
        },
    },
    variants: {},
    plugins: [],
}
