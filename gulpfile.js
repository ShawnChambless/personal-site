var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    uglify          = require('gulp-uglify'),
    bulkSass        = require('gulp-cssimport'),
    autoprefixer    = require('gulp-autoprefixer'),
    plumber         = require('gulp-plumber'),
    rename          = require('gulp-rename'),
    jade            = require('gulp-jade');

paths = {
                jadeIndex: ['./public/index.jade'],
                jade: ['./public/app/**/*.jade'],
                sass: ['./public/styles/main.sass'],
                scripts: ['./public/app/**/*.js']
    };

gulp.task('jade', function() {
    return gulp.src(paths.jade)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./public/app/'));
});

gulp.task('jadeIndex', function() {
    return gulp.src(paths.jadeIndex)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./public/'));
});

gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(plumber())
        .pipe(bulkSass())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('./public/styles'));
});

gulp.task('compress', function() {
    return gulp.src(paths.scripts)
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./public/minified'));
});

gulp.task('watch', function() {
    gulp.watch(paths.jade, ['jade']);
    gulp.watch(paths.jadeIndex, ['jadeIndex']);
    gulp.watch(['./public/styles/**/*.sass', './public/styles/**/*.scss'], ['sass']);
    gulp.watch(paths.scripts, ['compress']);
});

gulp.task('default', ['jade', 'jadeIndex', 'sass', 'compress', 'watch']);
