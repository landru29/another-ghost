'use strict';
 
var os = require('os');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
 
 
// Default usage: 
// Open one file with default application 
 

gulp.task('less', function() {
  gulp.src('./less/*.less')
    .pipe(plugins.less())
    .pipe(plugins.csscomb())
    .pipe(plugins.autoprefixer())
    .pipe(plugins.csso())
    .pipe(gulp.dest('./assets/css/'))
});

gulp.task('watch', function () {
  gulp.watch('./less/*.less', ['less']);
});
 
 
gulp.task('default', ['watch']);
