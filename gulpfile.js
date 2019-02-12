const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('default', function() {
    console.log('Hello, Gulp!');
});

gulp.task('sass', function() {
    gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./app/css'))
})

gulp.task('dev', function () {
    gulp.watch('./app/sass/**/*',['sass']);
})