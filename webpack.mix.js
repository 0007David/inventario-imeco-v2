const mix = require('laravel-mix');
const ChunkRenamePlugin = require("webpack-chunk-rename-plugin");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
   output: {
      filename: '[name].js',
      chunkFilename: 'js/[name].js'
   },
   plugins: [
      new ChunkRenamePlugin({
         initialChunksWithEntry: true,
         '/js/app': 'js/app.js',
         '/js/vendor': 'js/vendor.js'
      }),
   ],
});

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
