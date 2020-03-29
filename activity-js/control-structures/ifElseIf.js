Number.prototype.between = function(initiate, end) {
    return this >= initiate && this <= end
}

const printResult = function(note) {
    if(note.between(9, 10)) {
        console.log('Honor board!')
    } else if(note.between(7, 8.99)) {
        console.log('Approved!')
    } else if(note.between(4, 6.99)) {
        console.log('Recovery!')
    } else if(note.between(0, 3.99)) {
        console.log('Reproved!')
    } else {
        console.log('Invalid Note!')
    }

    // console.log('End...')
}

printResult(10)
printResult(8.9)
printResult(6.55)
printResult(2.3)
printResult(-1)
printResult(11)