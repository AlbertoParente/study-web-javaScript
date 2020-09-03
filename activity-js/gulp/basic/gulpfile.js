const gulp = require('gulp')
const { series } = require('gulp')

const firstTask = cb => {
    console.log('Task 1!')
    return cb()
}

const secondTask = cb => {
    console.log('Task 2!')
    return cb()
}

function copy(cb) {
    // gulp.src(['folder/file1.txt, folder/file2.txt'])
    gulp.src('folder/**/*.txt')
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