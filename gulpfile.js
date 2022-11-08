const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin')


function compilaImagem () {
    return gulp.src('*.png')
    .pipe(imagemin())
    .pipe(gulp.dest(''))
}

function compilaJavaScript () {
    return gulp.src('*.js')
    .pipe(uglify())
    .pipe(gulp.dest(''))
}

function compilaSass () {
    return gulp.src('*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest(''));
}

exports.default = function() {
    gulp.watch('*scss', { ignoreInitial: false }, gulp.series(compilaSass))
    gulp.watch('*.js', { ignoreInitial: false }, gulp.series(compilaJavaScript))
    gulp.watch('*.png', { ignoreInitial: false }, gulp.series(compilaImagem))
}