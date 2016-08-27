'use strict';

let gulp = require('gulp');
let del = require('del');

gulp.task('clean:js', function () {
  return del('app.js');
});
