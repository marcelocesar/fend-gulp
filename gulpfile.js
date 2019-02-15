/*eslint-env node */

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');
const jasmine = require('gulp-jasmine-phantom');


gulp.task('default', ['lint'], function() {});

gulp.task('sass', function() {
	gulp.src('./app/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./app/css'))
		.pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {

	browserSync.init({
		server: './app'
	});

	gulp.watch('./app/sass/*.scss', ['sass']);
	gulp.watch('./app/*.html').on('change', browserSync.reload);
});

gulp.task('lint', function() {
	return gulp.src(['./app/js/**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('tests', function() {
	return gulp.src('./tests/spec/test.js')
		.pipe(jasmine({
			integration: true,
			vendors: 'js/**/*.js'
		}));
});