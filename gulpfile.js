const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const runSequence = require('run-sequence');
const watchFiles = ['src/**/*.js', '!node_modules/**'];

gulp.task('lint', () => {
  return gulp
    .src(watchFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
gulp.task('babel', () => {
  return gulp.src(watchFiles).pipe(babel()).pipe(gulp.dest('dist'));
});
gulp.task('watch', () => {
  gulp.watch(watchFiles, ['babel']);
});
gulp.task('default', ['lint'], () => {
  runSequence('watch');
});
