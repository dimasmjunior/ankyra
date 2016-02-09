var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var eslint = require('gulp-eslint');
var series = require('stream-series');

gulp.task('inject', function() {
    var vendor = gulp.src(mainBowerFiles(), {read: false});
    var app = gulp.src(['client/js/**/*.js'], {read: false});
    return gulp.src('client/index.html')
        .pipe(inject(series(vendor, app), {relative: true}))
        .pipe(gulp.dest('client'));
});

gulp.task('lint', function () {
    return gulp.src(['**/*.js', '!node_modules/**', '!client/bower_components/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
