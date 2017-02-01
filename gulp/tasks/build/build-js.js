'use strict';

const ngAnnotate = require('gulp-ng-annotate');
const config = require('../../config');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gulp = require('gulp');

gulp.task('build:js', function (cb) {
  return gulp.src([config.initPath, config.jsPath])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest(config.distFolder));
});
