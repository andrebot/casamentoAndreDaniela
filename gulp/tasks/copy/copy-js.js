'use strict'; 

var config = require('../../config');
var gulp   = require('gulp');

gulp.task('copy:js', function () {
  return gulp.src(config.appJSLibPaths)
          .pipe(gulp.dest(config.distFolder + 'lib/js'));
});
