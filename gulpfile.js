/// <reference path="typings/tsd.d.ts" />

var gulp = require("gulp");
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var mocha = require("gulp-mocha");
var replace = require("gulp-regex-replace");

gulp.task("scripts", function () {
	return gulp.src("src/**/*.js")
		.pipe(sourcemaps.init())
		.pipe(babel({ loose: "all" }))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("dist/src"));
});

gulp.task("testsCompile", function () {
	return gulp.src("tests/**/*.js")
		.pipe(babel({ loose: "all" }))
		.pipe(gulp.dest("dist/tests"));
});

gulp.task("testsRun", ["scripts", "testsCompile"], function(){
	return gulp.src("dist/tests/**/*.js")
		.pipe(mocha({reporter:"nyan"}));
});

gulp.task("watch", function () {
	gulp.watch("src/**/*.js", ["scripts"]);
	gulp.watch("tests/**/*.js", ["testsCompile"]);
	gulp.watch("dist/tests/**/*.js", ["testsRun"]);
});

gulp.task("default",function(){
	gulp.start("scripts", "testsCompile", "testsRun");
});
