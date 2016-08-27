'use strict';

let ngAnnotate = require('gulp-ng-annotate');
let config = require('../../config');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let gulp = require('gulp');

gulp.task('build:js', function () {
  return gulp.src([config.initPath, config.jsPath])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    //.pipe(uglify())
    .pipe(gulp.dest(config.distFolder));
});
