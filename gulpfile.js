//Required================================================

var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

//Scripts Tasks===========================================

gulp.task('scripts', function(){
	// console.log('whatup fam?')
	gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
		// .pipe(rename({suffix:'.min'}))
		// .pipe(uglify())
		// .pipe(gulp.dest('app/js'))
		.pipe(reload({stream:true}));
});

//HTML Tasks==============================================

gulp.task('html', function(){
	gulp.src('app/**/*.html')
	.pipe(reload({stream:true}));
});


//CSS Tasks===============================================

gulp.task('css', function(){
	gulp.src('app/css/**/*.css')
	.pipe(reload({stream:true}));
});


//Browser-Sync Tasks======================================

gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: "./app/"
		}
	});
});


//Watch Tasks=============================================

gulp.task('watch', function(){
	gulp.watch('app/js/**/*.js', ['scripts']);
	gulp.watch('app/**/*.html', ['html']);
	gulp.watch('app/css/**/*.css', ['css']);
});

//Default Tasks===========================================

gulp.task('default', ['scripts', 'html', 'css', 'browser-sync', 'watch']);