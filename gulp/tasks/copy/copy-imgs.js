'use strict';

const config = require('../../config');
const gulp   = require('gulp');

gulp.task('copy:imgs', function () {
  return gulp.src(config.appImagePath)
          .pipe(gulp.dest(config.distFolder + 'imgs'));
});
