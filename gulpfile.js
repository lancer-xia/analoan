/**
 * Created by lancer on 15-1-30.
 */

var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload');


//gulp.task('js', function () {
//    return gulp.src('js/*.js')
//        .pipe(plugins.jshint())
//        .pipe(plugins.jshint.reporter('default'))
//        .pipe(plugins.uglify())
//        .pipe(plugins.concat('app.js'))
//        .pipe(gulp.dest('build'));
//});




gulp.task('less', function() {
    watch('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('public/css'))
        .pipe(livereload());
});




gulp.task('default', ['less']);