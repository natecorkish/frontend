const autoPreprocess = require('svelte-preprocess')
const preprocess = autoPreprocess({
    postcss: {
        plugins: [
            require("tailwindcss"),
            require("autoprefixer")
        ],
    },
    defaults: {
        script: 'typescript',
    },
});

module.exports = {
    preprocess
}