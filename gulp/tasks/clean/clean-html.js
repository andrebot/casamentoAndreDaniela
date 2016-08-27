'use strcit';

let config = require('../../config');
let gulp = require('gulp');
let del = require('del');

gulp.task('clean:html', function () {
  return del([config.viewFolder, config.viewFolder + '/**/*', 'index.html']);
});
