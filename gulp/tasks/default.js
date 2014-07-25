var gulp = require('gulp');

gulp.task('default', ['build'], function() {
	gulp.watch("templates/**/*", ['copy']);
});