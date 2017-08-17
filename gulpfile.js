/**
 * Created by root on 13.08.17.
 */
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var fileinclude = require('gulp-file-include');

// Static Server + watching scss/html files
gulp.task('serve', ['sass','copy','js','html'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("src/index.html", ['html']);
    gulp.watch("src/assets/img/**/*", ['copy']);
    gulp.watch("src/assets/style/*.scss", ['sass']);
    gulp.watch("src/assets/js/**/*.js", ['js']);
    gulp.watch("**/*.css").on('change', browserSync.reload);
    gulp.watch("**/*.js").on('change', browserSync.reload);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/assets/style/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/assets/style/"))
        .pipe(browserSync.stream());
});

gulp.task('copy', function() {
    return gulp.src("src/assets/img/**/*")
        .pipe(gulp.dest("app/assets/img"))
        .pipe(browserSync.stream());
});

// merge & copy JS files
gulp.task('js', function() {
  return gulp.src("src/assets/js/main.js")
    .pipe(fileinclude({
     prefix: '@@',
     basepath: '@file'
    }))
   .pipe(gulp.dest("app/assets/js/"));
});


gulp.task('html', function() {
    return gulp.src("src/index.html")
        .pipe(gulp.dest("app/"));
});


gulp.task('default', ['serve']);