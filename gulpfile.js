var runSequence = require('run-sequence');
var requireDir = require('require-dir');
var gulp = require('gulp');

//requiring all tasks from gulp folder
requireDir('./gulp/tasks', {recurse: true});

gulp.task('build', function (cb) {
  runSequence(['clean:lib',
               'clean:js',
               'clean:html'],
              ['copy:js',
               'copy:css',
               'copy:html',
               'copy:fonts',
               'copy:imgs',
               'build:js',
               'build:css'], cb);
});

gulp.task('clean', function (cb) {
  runSequence(['clean:lib', 'clean:js', 'clean:html']);
});
