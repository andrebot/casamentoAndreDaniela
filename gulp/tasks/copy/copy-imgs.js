'use strict';

const gulp       = require('gulp');
const imagemin   = require('gulp-imagemin');
const config     = require('../../config');

gulp.task('copy:imgs', function () {
  return gulp.src(config.appImagePath)
          .pipe(imagemin())
          .pipe(gulp.dest(config.distFolder + 'imgs'));
});
