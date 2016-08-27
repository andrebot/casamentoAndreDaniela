
'use strict';

let config = require('../../config');
let concat = require('gulp-concat');
let gulp = require('gulp');

gulp.task('build:css', function () {
  return gulp.src(config.cssPath)
          .pipe(concat('app.css'))
          .pipe(gulp.dest(config.distFolder));
});
