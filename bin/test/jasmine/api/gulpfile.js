// gulpfile.js

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');


gulp.task('all', () => {
  console.log('Starting all tests...');
  gulp.src('testsRunn.js')
      .pipe(jasmine())

});

// gulp.task('schema', () => {
//   console.log('Checking status...');
//   gulp.src('spec/Tests/schemaTests.js')
//       .pipe(jasmine())
// });
//
// gulp.task('crud', () => {
//   console.log('Checking status...');
//   gulp.src('spec/Tests/jasmine/api/specs/apiSpec.js')
//       .pipe(jasmine())
// });



gulp.task('default', ['all']);
