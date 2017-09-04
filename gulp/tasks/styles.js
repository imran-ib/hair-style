var gulp = require("gulp");
var postcss = require("gulp-postcss");
var atImport = require("postcss-import");
var cssVars = require("postcss-simple-vars");
var nested = require("postcss-nested");
var autoprefixer = require("autoprefixer");
var mixins = require("postcss-mixins");


gulp.task("styles" , function () {
	return gulp.src("./app/assets/styles/styles.css")
			.pipe(postcss([
				atImport,
				cssVars,
				mixins,			
 				nested,
 				autoprefixer
 				]))
			
			.on('error', function(errorInfo){
				console.log(errorInfo.toString());
				this.emit('end');
			})


			.pipe(gulp.dest("./app/temp/styles"));   // start here
});




// .pipe(gulp.dest('./app/temp/styles'));



