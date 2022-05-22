const anonymous = process.argv.indexOf('-a') !== -1
// console.log(anonymous)

if (anonymous) {
    process.stdout.write('Speak anonymous...!\n')
    process.exit()
} else {
    process.stdout.write('Enter your name: ')
    process.stdin.on('data', data => {
        const name = data.toString().replace('\n', '')

        process.stdout.write(`Speak ${name}!!\n`)
        process.exit()
    })
}
