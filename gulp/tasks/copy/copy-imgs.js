'use strict';

var config = require('../../config');
var gulp   = require('gulp');

gulp.task('copy:imgs', function () {
  return gulp.src(config.appImagePath)
          .pipe(gulp.dest(config.distFolder + 'imgs'));
});
