'use strict';

let config = require('../../config');
let gulp = require('gulp');

gulp.task('copy:fonts', function () {
  return gulp.src(config.appFontsLibPaths)
          .pipe(gulp.dest(config.distFolder + 'lib/fonts'));
});
