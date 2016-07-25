const gulp = require('gulp'),
      concat = require('gulp-concat'),
      concatCss = require('gulp-concat-css');

const paths = {
  js: ['www/lib/ionic/js/ionic.bundle.js',
    'www/js/app.js',
    'www/js/services/**/*.js',
    'www/js/controllers/**/*.js',
    'www/js/directives/**/*.js'],
  styles: ['www/lib/ionic/css/ionic.css',
    'www/styles/**/*.css']
};

gulp.task('default', ['js', 'css']);

gulp.task('js', function () {
  return gulp.src(paths.js)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('www/js'));
});

gulp.task('css', function () {
  return gulp.src(paths.styles)
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('www/css'));
});


