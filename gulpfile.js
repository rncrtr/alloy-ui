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
    cssmin     = require('gulp-cssmin');

gulp.task('default', function(){
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
    buildCss('./src/css/**/*.css', 'dist/css');
});

gulp.task('copy', ['clean'], function() {
    copyIndex();
});

gulp.task('bundle', ['clean'], function() {
    buildAppJs('./src/js/app.js', './dist/js');
});

gulp.task('build', ['ng', 'css', 'bundle', 'copy']);

gulp.task('watch', ['build'], function() {
    gulp.src('./src/**/*.*')
        .pipe(watch('./src/**/*.*', function(files) {
            console.log('Rebuilding...')
            buildAppJs('./src/js/app.js', './dist/js');
            buildCss('./src/css/**/*.css', 'dist/css');
            buildTemplates("./src/js/**//*.html", "templates.min.js", "./dist/js/");
            copyIndex();
        }));
});

function buildCss(src, dest) {
    return gulp.src(src)
        .pipe(concat('styles.css'))
        //.pipe(cssmin())
        .pipe(gulp.dest(dest));
}

function copyIndex() {
    return gulp.src('./src/index.html')
        /*.pipe(htmlMin({
            empty: true,
            spare: true,
            quotes: true
        }))*/
        .pipe(gulp.dest('./dist/'));
}

function buildAppJs(files, outfile) {
    return gulp.src(files)
        .pipe(browserify())
        //.pipe(uglify())
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
