var gulp = require("gulp");
var watch = require("gulp-watch");
var browserSync = require("browser-sync").create();






gulp.task("watch" , function(){


	browserSync.init({
		server:{
			baseDir: 'app'
		}


	});

	// watch HTML file for changes
	watch("./app/**/*.html",function(){
		browserSync.reload();
	});




	// watch styles tasks 

	watch("./app/assets/styles/**/*.css",function  () {
		// body...
		gulp.start("cssInject");
	});

});

gulp.task("cssInject",["styles"], function(){
	return gulp.src("./app/assets/styles/styles.css")

	.pipe(browserSync.stream());
});

