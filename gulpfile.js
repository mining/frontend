var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gettext = require('gulp-angular-gettext');

gulp.task('pot', function () {
    return gulp.src(['./assets/app/views/*.html', './views/*.html', './assets/app/scripts/**/*.js'])
        .pipe(gettext.extract('template.pot', {
            // options to pass to angular-gettext-tools...
        }))
        .pipe(gulp.dest('./mining/po/'));
});

gulp.task('translations', function () {
    return gulp.src('./mining/po/**/*.po')
        .pipe(gettext.compile({
            // options to pass to angular-gettext-tools...
            format: 'javascript'
        }))
        .pipe(gulp.dest('./assets/app/scripts/i18n'));
});

gulp.task('default', function() {
  return gulp.src('./assets/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
});
