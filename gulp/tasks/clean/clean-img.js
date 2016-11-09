'use strict'

const config = require('../../config');
const gulp = require('gulp');
const del = require('del');

gulp.task('clean:img', function () {
  return del(['imgs/', 'imgs/**/*']);
});
