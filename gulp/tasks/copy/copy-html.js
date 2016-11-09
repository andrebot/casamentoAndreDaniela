'use strict'; 

const config = require('../../config');
const flatten = require('gulp-flatten');
const gulp = require('gulp');

gulp.task('copy:html', function () {
  gulp.src([config.appHTMLPaths, '!' + config.indexPath])
    .pipe(flatten())
    .pipe(gulp.dest(config.distFolder + config.viewFolder));

  return gulp.src(config.indexPath)
    .pipe(flatten())
    .pipe(gulp.dest(config.distFolder));
});
