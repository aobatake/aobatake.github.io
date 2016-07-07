var gulp = require('gulp');
var babel = require('gulp-babel');

//html
var nunjucksRender = require('gulp-nunjucks-render');

//dev
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var watch = require('gulp-watch');

//sass
var sass = require('gulp-sass');

//images
var imagemin = require('gulp-imagemin');

//js
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

//ghpages
var deploy = require("gulp-gh-pages");

//css
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');


gulp.task('default', ['serve','image']);


//Deploy to gh-pages
gulp.task('deploy', function(){
	return gulp.src("./dist/**/*")
		.pipe(deploy())
});

//Does all processes and serves from dist + watches
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


//process html layouts
gulp.task('html', function(){
	return gulp.src('src/pages/html/*.njk')
		.pipe(nunjucksRender ({
			path:['src/pages/njk','src/pages/njk/svg' ]
		}))
		.on('error', errorDelete)
		.pipe(gulp.dest('dist/'))
		.pipe(reload({stream: true}));
});

//converts sass to css and post process css
gulp.task('sass' , function(){
	var processors = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano(),
    ];
	return gulp.src("src/sass/main.scss")
    	.pipe(sass())
    	.on('error',errorDelete)
    	.pipe(postcss(processors))
    	.pipe(gulp.dest("dist/css"))
    	.pipe(reload({stream: true}));

});

//minifies images
gulp.task('image', function(){

	return gulp.src("src/images/*")
		.pipe(imagemin())
		.on('error', errorDelete)
		.pipe(gulp.dest("dist/images"))
		.pipe(reload({stream:true}));
});

//concats and minifies js
gulp.task('js', function(){
	return gulp.src('src/js/*.js')
		.pipe(concat('main.js'))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.on('error', errorDelete)
		.pipe(gulp.dest('dist/js'))
		.pipe(reload({stream:true}));
});

//Utility
function errorDelete (error) {
	console.log(error.toString());
	this.emit('end')
}