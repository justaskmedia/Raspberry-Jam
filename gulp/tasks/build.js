var gulp = require('gulp');

gulp.task('build', ['browserify', 'sass', 'copy', 'browser-sync', 'flatten', 'images']);