var gulp = require('gulp');

gulp.task('default', ['build'], function() {
	gulp.watch("templates/**/*", ['copy']);
	gulp.watch("assets/sass/**/*", ['sass']);
	gulp.watch("assets/js/**/*", ['browserify']);
	gulp.watch("assets/images/**/*", ['images']);
});