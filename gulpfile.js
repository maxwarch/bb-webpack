var gulp = require('gulp');
var gulpwebpack = require('gulp-webpack');
var webpack = require('webpack');
var gutil = require("gulp-util");
var browserSync = require('browser-sync');
var webpackConfig = require('./webpack.config.js');
var clean = require('gulp-clean');
var uncss = require('gulp-uncss');
var dogen = require('gulp-dogen');
var path = require('path');

dogen.config({
    templatesPath: 'templatesGulp',
    gulp: gulp
});

gulp.task("clean-scripts", function() {
    return gulp.src(['./dist/*.js', './dist/*.js.map'], {read: false})
        .pipe(clean());
});


gulp.task("webpack", function() {
    var config = Object.create(webpackConfig);
    return gulp.src('./dev/js/main.js')
        .pipe(gulpwebpack(config))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('uncss', function() {
    return gulp.src('./dist/main.css')
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(gulp.dest('./dist'));
});

////////////////
//BROWSERSYNC //
////////////////
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        open: "external",
        browser: ["google chrome"] //, "firefox"]
    });
});

////////////
// RELOAD //
////////////
gulp.task('bs-reload', function () {
    browserSync.reload();
});

///////////
// WATCH //
///////////
gulp.task('watch', ['clean-scripts', 'webpack', 'browser-sync'], function() {
    gulp.watch(['./dev/js/**/*.js', './dev/js/**/*.html', './dev/js/**/*.json', './dev/js/**/*.html'], ['clean-scripts', 'webpack', browserSync.reload]);
    gulp.watch(['./dev/css/bootstrap/less/**/*.less', './dev/css/*.css'], ['webpack', browserSync.reload]);
    gulp.watch("./*.html", ['bs-reload']);
});

dogen.task('module', __dirname + '/dev/js/');
// gulp dogen --module guitars
gulp.task('default', ['watch']);