'use strict';

const config = require('../../config');
const gulp   = require('gulp');

gulp.task('copy:css', function () {
  return gulp.src(config.appCSSLibPaths)
          .pipe(gulp.dest(config.distFolder + 'lib/css'));
});
