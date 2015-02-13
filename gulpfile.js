var gulp = require('gulp');
var server = require('gulp-server-livereload');
var jade = require('gulp-jade');
var sass = require('gulp-sass');


var paths = {
  html: 'src/html/**/*',
  styles: 'src/stylesheets/**/*',
  data: 'resume.json'
};



gulp.task('server', function() {
  gulp.src('dist')
    .pipe(server({
      livereload: true
    }));
});

gulp.task('templates', function() {
  var data = require('./resume.json');

  gulp.src('./src/html/*.jade')
    .pipe(jade({
      locals: data
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('sass', function () {
  gulp.src('./src/stylesheets/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.html, ['templates']);
  gulp.watch(paths.styles, ['sass']);
  gulp.watch(paths.data, ['templates']);
});

gulp.task('default', ['templates', 'sass', 'watch', 'server']);
