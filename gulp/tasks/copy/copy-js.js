'use strict'; 

const config = require('../../config');
const gulp   = require('gulp');

gulp.task('copy:js', function () {
  return gulp.src(config.appJSLibPaths)
          .pipe(gulp.dest(config.distFolder + 'lib/js'));
});
