var gulp = require('gulp'),
    sass = require('gulp-sass'),
    neat = require('node-neat').includePaths,
    concat = require('gulp-concat'),
    minifyHTML = require('gulp-minify-html'),
    browserify = require('browserify'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserSync = require('browser-sync').create(),
    nodemon = require('gulp-nodemon'),
    imagemin = require('gulp-imagemin');


    // Static Server + watching scss/html files
gulp.task('server', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch('app/*.js').on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile Sass task
gulp.task('sass', function() {
  return gulp.src('app/scss/*.scss')
    .pipe(sass({
      includePaths: ['sass'].concat(neat)
    }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
});


// Serve Task with nodemon
gulp.task('serve', ['start', 'server'])

// Default task
gulp.task('default', ['jshint', 'sass', 'watch']);
