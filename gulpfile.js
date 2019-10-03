//Gulp Plugins
const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const rename = require("gulp-rename");
const { watch } = require('gulp');

//Compile SASS to CSS
function style() {
    return src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(dest('./src/css'))
        .pipe(browserSync.stream())
}

//Clean CSS to minify the css File
function minifycss() {
    return src('src/css/styles.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename('styles.min.css'))
        .pipe(dest('public/css'))
}

//Browsersync
function sync() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
    watch('./src/scss/*.scss', style)

    watch('./src/*.html').on('change', reload)
    watch('./src/css/*').on('change', reload)
    watch('./src/js/*.js').on('change', reload)
}

//Copy HTML Files and put to Public
function copyhtml() {
    return src('./src/*.html')
        .pipe(dest('public/'));
}
//Copy JS Files and put to public
function copyjs() {
    return src('./src/js/*')
        .pipe(dest('public/js'));
}

//Export Task to run single Tasks
exports.style = style;
exports.sync = sync;

//Export Task to run single Tasks for public
exports.copyjs = copyjs;
exports.copyhtml = copyhtml;
exports.minifycss = minifycss;

exports.default = parallel(style, sync);