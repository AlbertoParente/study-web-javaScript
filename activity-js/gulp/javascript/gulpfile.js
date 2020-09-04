const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformationJs(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presents: ["env"]
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))

    return cb()
}

function end(cb) {
    console.log('The end!!')
    return cb()
}

exports.default = series(transformationJs) 