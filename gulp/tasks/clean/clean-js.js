'use strict';

const gulp = require('gulp');
const del = require('del');

gulp.task('clean:js', function () {
  return del('app.js');
});
