const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

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
gulp.task('default', ['lint'], () => {
  gulp.watch(watchFiles, ['babel']);
});
