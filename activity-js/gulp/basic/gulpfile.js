const gulp = require('gulp')
const { series, parallel } = require('gulp')

const firstTask = cb => {
    console.log('Task 1!')
    return cb()
}

const secondTask = cb => {
    console.log('Task 2!')
    return cb()
}

function copy(cb) {
    // gulp.src(['folderA/file1.txt', 'folderA/file2.txt'])
    gulp.src('folderA/**/*.txt')
        // .pipe(halfImage())
        // .pipe(blackAndWhiteImage())
        // .pipe(transformationA())
        // .pipe(transformationB())
        // .pipe(transformationC())
        .pipe(gulp.dest('folderB'))
    return cb()
}


const end = cb => {
    console.log('Task end 1!')
    return cb()
}

module.exports.default = series(
    parallel(firstTask, secondTask),
    copy,
    end
)