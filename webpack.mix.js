const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')


mix
    .sass('src/assets/sass/app.scss', 'public/assets/css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    })