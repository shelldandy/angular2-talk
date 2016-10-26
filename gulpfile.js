'use strict';

var gulp          = require('gulp'),
    ghPages       = require('gulp-gh-pages'),
    sass          = require('gulp-sass'),
    shell         = require('gulp-shell'),
    webserver     = require('gulp-webserver'),
    runSequence   = require('run-sequence').use(gulp),
    clean         = require('del'),
    autoprefixer  = require('gulp-autoprefixer');

gulp.task('clean'), function() {
  return clean(['./dist/**', '!./dist', './.publish']);
};

gulp.task('deploy:ghPages', function() {
  gulp.src('./dist/**/*')
  .pipe(ghPages());
});

gulp.task('deploy', function(){
  runSequence('clean', 'sass', 'assets', 'cleaver', 'deploy:ghPages');
});

gulp.task('assets', function() {
  return gulp.src('./src/img/**/*')
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('sass', function() {
  return gulp.src('./src/style.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers : ['last 2 versions']
  }))
  .pipe(gulp.dest('./src'));
});

gulp.task('sass:cleaver', function(){
  runSequence('sass', 'cleaver');
});

gulp.task('cleaver', function(){
  return gulp.src('./src/bem.md')
    .pipe(shell([
      'cleaver src/index.md'
    ]));
});

gulp.task('watch', ['server'], function() {
  gulp.watch('./src/*.sass', ['sass:cleaver']);
  gulp.watch('./src/index.md', ['cleaver']);
  gulp.watch('./src/img/**', ['assets']);
});

gulp.task('server', function(){
  return gulp.src('./dist')
    .pipe(webserver({
      livereload : true,
      open : true
    }))
});

gulp.task('default', function(){
  runSequence('clean', 'sass', 'assets', 'cleaver', 'watch');
});
