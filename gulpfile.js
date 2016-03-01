var gulp = require('gulp'),
    inject = require('gulp-inject'),
    uglify = require('gulp-uglify'),
    sass = require("gulp-sass"),
    cssmin = require('gulp-cssmin'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat');

// ADD HTML TO BUILD
gulp.task('index',['inject'], function () {
    console.log('building index');
    gulp.src('src/index.html') // path to your files
    .pipe(gulp.dest('dist'));
});

gulp.task('views',['inject'], function () {
    console.log('building views');
    gulp.src('./src/views/*.html') // path to your files
    .pipe(gulp.dest('dist/views'));
});

// MINIFY JS
gulp.task('js',['clean'], function () {
    console.log('javascripting it all up');
    // grab any js files and minify into one file
    gulp.src(['./src/js/**/*.js']) // path to your files
    .pipe(uglify())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist/js'));
});

// JQUERY IS ADDED SEPARATELY SO IT IS LOADED FIRST
gulp.task('jquery',['clean'],function(){
    //copy jquery fresh to the dist folder since we're adding it manually 
    console.log('adding jquery');
    gulp.src('./node_modules/jquery/dist/jquery.min.js') // path to your files
        .pipe(gulp.dest('dist/js'));
});

// SASSY
gulp.task('sass',['clean'], function () {
    console.log('sassy-frassing');
    // this converts all sass into css and adds it to the SRC folder for injection like regular css
    gulp.src('./src/sass/*.scss') // path to your file
    .pipe(sass())
    .pipe(gulp.dest('src/css'));
});

// EWWWW, DIRTY CSSpools!
gulp.task('css',['clean'], function () {
    //minify the css for injection
    console.log('css styling the place up');
    gulp.src('./src/css/*.css') // path to your file
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css'));
});

// INSULIN ACTIVATE
gulp.task('inject',['jquery','js','css','sass'], function () {
  gulp.src('./src/index.html')
    .pipe(inject(gulp.src(['./src/js/*.js','./src/css/*.css'], {read: false}),{ignorePath: 'src'}))
    .pipe(gulp.dest('./dist'));
});

// DELETE DELETE. CYBERMEN WERE HERE.
gulp.task('clean',function(){
    console.log('cleaning out the old stuff');
    return gulp.src('dist', {read: false})
      .pipe(clean());
});

// main task to kickoff the others
gulp.task('default',['index','views'],function(){
    
});

// gulp.task('debug',[''],function(){});