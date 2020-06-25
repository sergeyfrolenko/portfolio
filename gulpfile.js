const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
// const browserSync = require('browser-sync');
gulp.task('sass', function(done) {
      gulp.src("dev/scss/*.scss")
          .pipe(sass())
          .pipe(cssnano())
          .pipe(gulp.dest("dest/css"))
      done();
});
gulp.task('pug', (done)=>{
  gulp.src('dev/pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dest'))
  done();
});
gulp.watch("dev/scss/*.scss", gulp.series('sass'))
gulp.watch("dev/pug/*.pug", gulp.series('pug'))
gulp.task('default', gulp.series('sass', 'pug'));
