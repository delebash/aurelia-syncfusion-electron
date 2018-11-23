var gulp = require('gulp');
var paths = require('../paths');
var electron = require('electron-connect').server.create()

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function() {
  electron.start();
  gulp.watch(paths.source, ['build-system', electron.reload]).on('change', reportChange);
  gulp.watch(paths.html, ['build-html', electron.reload]).on('change', reportChange);
  gulp.watch(paths.css, ['build-css', electron.reload]).on('change', reportChange);
  gulp.watch(paths.style, function() {
    return gulp.src(paths.style)
  }).on('change', reportChange);
});
