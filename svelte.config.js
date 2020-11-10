const production = process.env.NODE_ENV === "production"
const autoPreprocess = require("svelte-preprocess")
const preprocess = autoPreprocess({
    sourceMap: !production,
    scss: { includePaths: ['src'] },
    postcss: true,
    defaults: {
        script: "typescript",
    },
});

module.exports = {
    dev: !production,
    emitCss: true,
    css: css => {
        css.write('public/build/bundle.css');
    },
    preprocess,
}
