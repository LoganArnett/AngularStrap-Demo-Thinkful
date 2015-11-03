var gulp = require('gulp'),
    sass = require('gulp-sass'),
    neat = require('node-neat').includePaths,
    minifyHTML = require('gulp-minify-html'),
    rename = require('gulp-rename'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserSync = require('browser-sync').create();


    // Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

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

// Default task
gulp.task('default', ['jshint', 'sass', 'watch']);
