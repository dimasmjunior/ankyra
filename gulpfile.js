var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var eslint = require('gulp-eslint');

gulp.task('default', function() {
    var libs = gulp.src(mainBowerFiles(), {read: false});
    return gulp.src('client/index.html')
        .pipe(inject(libs, {relative: true}))
        .pipe(gulp.dest('client'));
});

gulp.task('lint', function () {
    return gulp.src(['**/*.js', '!node_modules/**', '!client/bower_components/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
