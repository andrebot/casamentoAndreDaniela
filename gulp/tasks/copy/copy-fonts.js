'use strict';

const config = require('../../config');
const gulp = require('gulp');

gulp.task('copy:fonts', function () {
  return gulp.src(config.appFontsLibPaths)
          .pipe(gulp.dest(config.distFolder + 'lib/fonts'));
});
