/**
 * Created by lancer on 15-1-30.
 */
// 引入组件
var gulp = require('gulp'),
    less = require('gulp-less'),
    gulplive = require('gulp-livereload'),
    connect = require('gulp-connect');

    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

// 文件路径
var paths = {
    public: './public/js/**/*',
    reutesjs: './routes/**/*',
    images: './public/images/**/*',
    less: './less/**/*',
    css: './public/css',
    views: './views/**/*'
};

// 检查项目中的js代码，看看是否存在报告和警告
gulp.task('jshint', function() {
    gulp.src([
        paths.public,
        paths.reutesjs
    ]).pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

// 编译less文件，并且监控是否改变
gulp.task('less', function() {
    gulp.src(paths.less)
        .pipe(less())
        .pipe(gulp.dest(paths.css))
        .pipe(connect.reload());
});

// 监控文件改变的时候刷新页面
gulp.task('watch', function () {
    gulplive.listen();

    gulp.watch([
        paths.public,
        paths.reutesjs,
        paths.css,
        paths.images,
        paths.views
    ], ['reload']).on('change', gulplive.changed);

    gulp.watch(paths.less, ['less']);

});

//使用connect启动一个Web服务器
gulp.task('connect', function () {
    connect.server({
        root: 'app',
        port: 3000,
        livereload: true
    });
});

// 重启服务器
gulp.task('reload', function () {
   gulp.src([
       paths.public,
       paths.reutesjs,
       paths.css,
       paths.images,
       paths.views
   ]).pipe(connect.reload());
});

//运行Gulp时，默认的Task
gulp.task('default', ['jshint', 'less', 'connect', 'watch']);
