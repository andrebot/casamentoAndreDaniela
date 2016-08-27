'use strict'; 

var config = require('../../config');
var flatten = require('gulp-flatten');
var gulp = require('gulp');

gulp.task('copy:html', function () {
  gulp.src([config.appHTMLPaths, '!' + config.indexPath])
    .pipe(flatten())
    .pipe(gulp.dest(config.distFolder + config.viewFolder));

  return gulp.src(config.indexPath)
    .pipe(flatten())
    .pipe(gulp.dest(config.distFolder));
});
