const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const pxtorpx = require('postcss-px2rpx');
const rename = require('gulp-rename');

gulp.task('compile-css', () => {
  const processors = [pxtorpx()];

  return gulp
    .src(['../src/**/*.less', '!../src/**/_*.less'])
    .pipe(less())
    .pipe(postcss(processors))
    .pipe(cssmin())
    .pipe(
      rename(path => {
        path.extname = '.wxss';
      })
    )
    .pipe(gulp.dest('../dist/'));
});

gulp.task('compile-js', () => {
  return gulp.src(['../src/**/*.js']).pipe(gulp.dest('../dist/'));
});

gulp.task('compile-json', () => {
  return gulp.src(['../src/**/*.json']).pipe(gulp.dest('../dist/'));
});

gulp.task('compile-wxml', () => {
  return gulp.src(['../src/**/*.wxml']).pipe(gulp.dest('../dist/'));
});

gulp.task('default', gulp.series(['compile-css', 'compile-js', 'compile-json', 'compile-wxml']));
