const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const clean = require('gulp-clean');

gulp.task('sass', () => {
	gulp.src('./src/assets/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(concat('all.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('scripts', function() {
    return gulp.src([
			'./src/**/*.module.js',
			'./src/**/*Service.js',
			'./src/**/*Directive.js',
			'./src/**/*Component.js'
		])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-assets', () => {
	gulp.src([
		'./src/**/*.html'
	])
	.pipe(gulp.dest('./dist'))

});

gulp.task('start', function () {
	nodemon({
		script: 'server.js',
		ext: 'js html',
		env: { 'NODE_ENV': 'development' }
	});
});

gulp.task('clean',  () => {
    gulp.src('./dist', {read: false})
        .pipe(clean());
});

gulp.task('default', ['clean', 'sass', 'scripts', 'copy-assets', 'start'], () => {
	gulp.watch('./src/assets/sass/**/*.scss', ['sass']);
	gulp.watch('./src/**/*.js', ['scripts']);
});
