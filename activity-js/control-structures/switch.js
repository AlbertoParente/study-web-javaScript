const printResult = function (note) {
    switch (Math.floor(note)) {
        case 10:
        case 9:
            console.log('Honor board!')
            break
        case 8: case 7:
            console.log('Approved!')
            break
        case 6: case 5: case 4:
            console.log('Recovery!')
            break
        case 3: case 2: case 1:
            console.log('Reproved!')
            break
        default:
            console.log('Invalid Note!')
    }
    // console.log(End...)
}

printResult(10)
printResult(8.9)
printResult(6.55)
printResult(2.3)
printResult(-1)
printResult(11)

