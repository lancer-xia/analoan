/**
 * Created by lancer on 15-1-30.
 */
// 引入组件
var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect');

var paths = {
    scripts: ['./public/js/**/*', './routes/**/*'],
    images: './public/images/**/*',
    views: './views/**/*',
    less: './less/**/*',
    css: './public/css'
};
// 检查项目中的js代码，看看是否存在报告和警告
gulp.task('jshint', function() {
    gulp.src(paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 编译less文件，并且监控是否改变
gulp.task('less', function() {
    gulp.src(paths.less)
        .pipe(less())
        .pipe(gulp.dest(paths.css));
});

gulp.task('watch', function () {
    livereload.listen();

    // watch for changes
    gulp.watch([
        paths.scripts,
        paths.css,
        paths.images,
        paths.views
    ]).on('change', livereload.changed);

    gulp.watch(paths.less, ['less']);
});

//运行Gulp时，默认的Task
gulp.task('default', ['jshint', 'less', 'watch']);


// 监控html、js、less变化，进行自动化发布



////创建watch任务去检测html文件,其定义了当html改动之后，去调用一个Gulp的Task
//gulp.task('watch', function () {
//    gulp.watch(['./www/*.html'], ['html']);
//});
//
////使用connect启动一个Web服务器
//gulp.task('connect', function () {
//    connect.server({
//        root: 'www',
//        livereload: true
//    });
//});
//
//gulp.task('html', function () {
//    gulp.src('./www/*.html')
//        .pipe(connect.reload());
//});
//


//
//// 合并，压缩文件
//gulp.task('scripts', function() {
//    gulp.src('./public/js/*.js')
//        .pipe(concat('all.js'))
//        .pipe(gulp.dest('./dist'))
//        .pipe(rename('all.min.js'))
//        .pipe(uglify())
//        .pipe(gulp.dest('./dist'));
//});
//
//// 默认任务
//gulp.task('default', function(){
//    gulp.run('lint', 'less', 'scripts');
//
//    // 监听文件变化
//    gulp.watch('./js/*.js', function(){
//        gulp.run('lint', 'less', 'scripts');
//    });
//
//
//});