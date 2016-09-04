const gulp = require('gulp');
const sass = require('gulp-sass');
const util = require('gulp-util');
const rename = require('gulp-rename');

gulp.task('default', () => {
  const slim = util.env.slim || false;
  return gulp.src(slim ? './src/noren.slim.scss' : './src/noren.scss')
    .pipe(
      sass({
        outputStyle: 'compressed',
      })
        .on('error', sass.logError)
    )
    .pipe(rename({
      extname: '.min.css',
    }))
    .pipe(gulp.dest('./dist'));
});
