
'use strict';

const config = require('../../config');
const concat = require('gulp-concat');
const gulp = require('gulp');

gulp.task('build:css', function () {
  return gulp.src(config.cssPath)
          .pipe(concat('app.css'))
          .pipe(gulp.dest(config.distFolder));
});
