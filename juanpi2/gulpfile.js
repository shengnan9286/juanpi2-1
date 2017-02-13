var gulp=require("gulp"),
	webserver=require("gulp-webserver"),
	livereload=require("gulp-livereload"),
	uglify=require("gulp-uglify")
	imagemin=require("gulp-imagemin"),
	pngquant=require("imagemin-pngquant"),
	concat = require('gulp-concat');


// 注册任务：
gulp.task("webserver",function(){
	gulp.src('./dist').pipe(webserver({
		livereload:true,
		open:true
	}))
});
// html任务：
gulp.task("html",function(){
	return gulp.src(["public/**/*.html","index.html"])
	.pipe(gulp.dest("dist"));
	//指明源文件路径并输出到发布环境
});

// sass任务：
gulp.task("css",function(){
	return gulp.src("public/**/**.css")
	.pipe(gulp.dest("dist"));
})

// script压缩任务：
gulp.task("script",function(){
	return gulp.src("public/js/**/*.js")
		.pipe(uglify({preserveComment:"some"})) //压缩并保留注释
		.pipe(gulp.dest("dist/js"))
})

//gulp文件合并任务
//gulp.task('concat', function(){
//	gulp.src('dist/public/js/**/*.min.js')
//	//要合并的文件
//	.pipe(concat('libs.js'))
//	//合并成libs.js
//	.pipe(gulp.dest('dist'));
//})

//压缩图片
gulp.task("image",function(){
	return gulp.src("public/**/*.{png,jpg,gif,svg}")
		.pipe(imagemin({progressive:true,
						use:[pngquant()]
		})) //无损压缩
		.pipe(gulp.dest("dist"))
})

//注册自动刷新任务
// 监听任务：
gulp.task("watch",function(){
	gulp.watch("public/html/*.html",["html"]);//监听根目录下所有的html,发生变化时执行'html'任务
	gulp.watch("public/css/*.css",['css']);
	gulp.watch("public/img/**/*.{png,jpg,gif,svg}",["image"]);
	gulp.watch("public/js/**/*.js",['script'])
});

//默认执行任务：
gulp.task("default",['css','image',"webserver","html","script","watch"]);