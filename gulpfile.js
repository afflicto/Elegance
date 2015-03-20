var gulp = require('gulp');
var order = require('gulp-order');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

// compile elegance source files to "dist" and the "test" directory
gulp.task('elegance', function() {
	gulp.src(['src/**/*.coffee'])
		.pipe(order([
			'Entry.coffee',
			'Util.coffee',
			'Elegance.coffee',
		], {
			base: 'src/',
		}))
		.pipe(sourcemaps.init())
		.pipe(coffee().on('error', gutil.log))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist'))
		.pipe(gulp.dest('test/public/scripts/elegance'));
});

gulp.task('test', function() {
	gulp.src(['test/resources/coffee/*.coffee'])
		.pipe(coffee())
		.pipe(gulp.dest('test/public/scripts'))
});

//	watch
gulp.task('watch', function() {
	gulp.watch(['src/**/*.coffee', 'test/resources/coffee/*.coffee'], ['elegance', 'test']);
});

gulp.task('default', ['elegance', 'watch']);