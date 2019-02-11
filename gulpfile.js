const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', () => {
    console.log('Hello, Gulp!');
});

gulp.task('sass', () => {
    gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/assets/css'));
})