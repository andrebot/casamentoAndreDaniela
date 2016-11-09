'use strcit';

const config = require('../../config');
const gulp = require('gulp');
const del = require('del');

gulp.task('clean:html', function () {
  return del([config.viewFolder, config.viewFolder + '/**/*', 'index.html']);
});
