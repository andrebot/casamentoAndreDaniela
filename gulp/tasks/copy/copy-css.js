'use strict';

var config = require('../../config');
var gulp   = require('gulp');

gulp.task('copy:css', function () {
  return gulp.src(config.appCSSLibPaths)
          .pipe(gulp.dest(config.distFolder + 'lib/css'));
});
