var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var deploy = require("gulp-gh-pages");


gulp.task('deploy', function(){
	return gulp.src("./dist/**/*")
		.pipe(deploy())
});

gulp.task('serve',['sass','html','js'], function(){
	browserSync.init({
		server:{
			baseDir: "./dist"
		}
	});
	gulp.watch("src/sass/**/*.scss",['sass']);
	gulp.watch('src/pages/**/*.njk', ['html']);
	gulp.watch('src/js/*',['js']);
	gulp.watch('src/images/*'['images']);
});

gulp.task('html', function(){
	return gulp.src('src/pages/html/*.njk')
		.pipe(nunjucksRender ({
			path:['src/pages/njk']
		}))
		.on('error', errorDelete)
		.pipe(gulp.dest('dist/'))
		.pipe(reload({stream: true}));
});

gulp.task('sass' , function(){
	return gulp.src("src/sass/main.scss")
    	.pipe(sass())
    	.on('error',errorDelete)
    	.pipe(gulp.dest("dist/css"))
    	.pipe(reload({stream: true}));

});

gulp.task('image', function(){

	return gulp.src("src/images/*")
		.pipe(imagemin())
		.on('error', errorDelete)
		.pipe(gulp.dest("dist/images"))
		.pipe(reload({stream:true}));
});

gulp.task('js', function(){
	return gulp.src('src/js/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify())
		.on('error', errorDelete)
		.pipe(gulp.dest('dist/js'))
		.pipe(reload({stream:true}));
});

gulp.task('default', ['serve','image']);


//Utility

function errorDelete (error) {
	console.log(error.toString());
	this.emit('end')
}