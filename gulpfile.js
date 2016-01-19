var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');

gulp.task('default', [
    'copy-index-html',
    'copy-libs-js',
    'copy-libs-css',
    'inject-libs']);

gulp.task('copy-index-html', function() {
    return gulp.src('public/index.html')
        .pipe(gulp.dest('public/dist'));
});

gulp.task('copy-libs-js', function() {
    return gulp.src(mainBowerFiles(/\.js$/))
        .pipe(gulp.dest('public/dist/libs/js'));
});

gulp.task('copy-libs-css', function() {
    return gulp.src(mainBowerFiles(/\.css$/))
        .pipe(gulp.dest('public/dist/libs/css'));
});

gulp.task('inject-libs', function() {
    var target = gulp.src('public/dist/index.html');
    var sources = gulp.src([
        'public/dist/libs/js/*.js',
        'public/dist/libs/css/*.css'], {read: false});
    return target.pipe(inject(sources, {relative: true}))
      .pipe(gulp.dest('public/dist'));
});
