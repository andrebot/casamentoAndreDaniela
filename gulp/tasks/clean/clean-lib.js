'use strict'

let config = require('../../config');
let gulp = require('gulp');
let del = require('del');

gulp.task('clean:lib', function () {
  return del(['lib/', 'lib/**/*']);
});
