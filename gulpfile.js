var gulp       = require('gulp'),
    _          = require('lodash'),
    fs         = require('fs'),
    nodemon    = require('gulp-nodemon'),
    ini        = require('ini'),
    config     = ini.parse(fs.readFileSync('./.env', 'utf-8')),
    concat     = require('gulp-concat'),
    uglify     = require('gulp-uglify'),
    htmlMin    = require('gulp-minify-html'),
    browserify = require('gulp-browserify'),
    clean      = require('gulp-clean'),
    watch      = require('gulp-watch'),
    ngHtml2Js  = require('gulp-ng-html2js'),
    cssmin     = require('gulp-cssmin'),
    sass       = require("gulp-sass"),
    es         = require('event-stream');

gulp.task('serve', function(){
    // Update process.env with our .env values
    _.assign(process.env, config);
    nodemon({
        script: 'server.js',
        options: '-e html,js -w lib'
    });
});

gulp.task('clean', function(cb) {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('ng', ['clean'], function() {
    buildTemplates("./src/js/**/*.html", "templates.min.js", "./dist/js/");
});

gulp.task('css', ['clean'], function() {
    buildCss('./src/css/**/*.css', './src/sass/**/*.scss', 'dist/css');
});

gulp.task('img', ['clean'], function() {
    buildImg('./src/img/*', 'dist/img');
});

gulp.task('copy', ['clean'], function() {
    copyIndex();
});

gulp.task('bundle', ['clean'], function() {
    buildAppJs('./src/js/app.js', './dist/js');
    buildPrismJs('./src/js/prism.js', './dist/js');
});

gulp.task('build', ['ng', 'css', 'img', 'bundle', 'copy']);

gulp.task('watch', ['build'], function() {
   /* gulp.src('./src/!**!/!*.*')
        .pipe(watch('./src/!**!/!*.*', function(file) {
            console.log(file.path);
            buildAppJs('./src/js/app.js', './dist/js');
            buildCss('./src/css/!**!/!*.css', './src/sass/!**!/!*.scss', 'dist/css');
            buildTemplates("./src/js/!**!//!*.html", "templates.min.js", "./dist/js/");
            copyIndex();
        }));*/

    gulp.src('./src/**/*.*css')
        .pipe(watch('./src/**/*.*css', function(file) {
            console.log(file.path + " changed, rebuilding dist/css");
            buildCss('./src/css/**/*.css', './src/sass/**/*.scss', 'dist/css');
        }));

    gulp.src('./src/**/*.js')
        .pipe(watch('./src/**/*.js', function(file) {
            console.log(file.path + " changed, rebuilding app.js");
            buildAppJs('./src/js/app.js', './dist/js');
        }));

    gulp.src('./src/prism.js')
        .pipe(watch('./src/prism.js', function(file) {
            console.log(file.path + " changed, rebuilding app.js");
            buildPrismJs('./src/js/prism.js', './dist/js');
        }));

    gulp.src('./src/js/**/*.html')
        .pipe(watch('./src/js/**/*.html', function(file) {
            console.log(file.path + " changed, rebuilding templates.min.js");
            buildTemplates("./src/js/**//*.html", "templates.min.js", "./dist/js/");
        }));

    gulp.src('./src/index.html')
        .pipe(watch('./src/index.html', function(file) {
            console.log(file.path + " changed, rebuilding index.html");
            copyIndex();
        }))
});

gulp.task('default', ['build']);

function buildCss(cssSrc, sassSrc, dest) {
    return es.merge(gulp.src(cssSrc), gulp.src(sassSrc).pipe(sass()))
        .pipe(concat('styles.css'))
        //.pipe(cssmin())
        .pipe(gulp.dest(dest));
}

function buildImg(imgSrc, dest) {
    return gulp.src(imgSrc)
        .pipe(gulp.dest(dest));
}

function copyIndex() {
    return gulp.src('./src/index.html')
        .pipe(htmlMin({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(gulp.dest('./dist/'));
}

function buildAppJs(files, outfile) {
    return gulp.src(files)
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest(outfile));
}

function buildPrismJs(files, outfile) {
    return gulp.src(files)
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest(outfile));
}

function buildTemplates(src, file, dest) {
    return gulp.src(src)
        .pipe(htmlMin({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js({
            moduleName: "templates"
        }))
        .pipe(concat(file))
        .pipe(uglify())
        .pipe(gulp.dest(dest));
}
