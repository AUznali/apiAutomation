// gulpfile.js

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');



gulp.task('status', () => {
  console.log('Checking status...');
  gulp.src('spec/Tests/jasmine/api/test/statusCheck.js')
      .pipe(jasmine())
});



//gulp.task('default', ['status', 'schema']);
