var gulp = require('gulp');
var $ = require('gulp-load-plugins');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('live-server', function(){
	var server = new liveServer('server/main.js');
	server.start();
});

gulp.task('bundle', function(){
	return browserify({
		entries: 'app/main.jsx',
		debug:true,
	})
	.transform(reactify)
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('.tmp/'));
});
gulp.task('serve',['bundle','live-server'], function(){
	browserSync.init(null,{
		proxy:'localhost:'+7777,
		port: 8085
	})
});