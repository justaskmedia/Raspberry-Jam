var gulp = require('gulp'),
	flatten = require('gulp-flatten');

gulp.task('flatten', function() {
	gulp.src('bower_components/**/*.min.js')
  	.pipe(flatten())
  	.pipe(gulp.dest('build/assets/js'));
});