var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');

gulp.task('default', function() {
    var libs = gulp.src(mainBowerFiles(), {read: false});
    return gulp.src('client/index.html')
        .pipe(inject(libs, {relative: true}))
        .pipe(gulp.dest('client'));
});
