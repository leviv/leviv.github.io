var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var reload  = browserSync.reload;
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require('path');
var concat = require("gulp-concat");



// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'js', 'compressImg', 'svgstore'], function() {

    browserSync({
        proxy: "dev/trust-project"
    });
    // Watch SCSS file for change to pass on to sass compiler,
    gulp.watch('assets/sass/*.{scss,sass}', ['sass']);
    // Watch SCSS file for change to pass on to sass compiler,
    gulp.watch('assets/js/*.js', ['js']);
    // run img compression when images added to directory
    gulp.watch('assets/img/*.*', ['compressImg']);
    // run SVG when svg files added
    gulp.watch('assets/svg/*.svg', ['svgstore']);
    // Watch our CSS file and reload when it's done compiling
    gulp.watch("dist/css/*.css").on('change', reload);
    // Watch php file
    gulp.watch("../*/*.php").on('change', reload);
    // watch javascript files
    gulp.watch("dist/js/*.js").on('change', reload);
});

gulp.task('svgstore', function () {
    return gulp
        .src('assets/svg/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            };
        }))
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(gulp.dest('dist/svg/'));
});

/* gulp.task('sass', function () {
  // gulp.src locates the source files for the process.
  // This globbing function tells gulp to use all files
  // ending with .scss or .sass within the scss folder.
  return gulp.src('../stylesheets/*.{scss,sass}')
    // Initializes sourcemaps
    .pipe(sourcemaps.init())
    // Converts Sass into CSS with Gulp Sass
    .pipe(sass({
      errLogToConsole: true
    }))
    // adds prefixes to whatever needs to get done
    .pipe(autoprefixer())
    // Writes sourcemaps into the CSS file
    .pipe(sourcemaps.write())
    // Outputs CSS files in the css folder
    .pipe(gulp.dest('../'));
})*/


gulp.task('sass', function () {
    processSASS('styles');
});

gulp.task('js', function() {
    var jsFiles = 'assets/js/*.js',
    jsDest = 'dist/js';

    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

function compressJS(filename) {
    rootPath = "assets/js/";
    src = "assets/js/"+filename+".js";
    dist = 'dist/js/';

    return gulp.src(src)
        .pipe(uglify())
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(gulp.dest(dist));
}

gulp.task('compressImg', function() {
    return gulp.src('assets/img/*')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/img'));
});


function processSASS(filename) {
    return gulp.src('assets/sass/'+filename+'.{scss,sass}')
      // Converts Sass into CSS with Gulp Sass
      .pipe(sass({
        errLogToConsole: true
      }))
      // adds prefixes to whatever needs to get done
      .pipe(autoprefixer())

      // minify the CSS
      .pipe(minifyCss())

      // rename to add .min
      .pipe(rename({
        suffix: '.min'
      }))
      // Outputs CSS files in the css folder
      .pipe(gulp.dest('dist/css/'));
}

// Creating a default task
gulp.task('default', ['serve']);
