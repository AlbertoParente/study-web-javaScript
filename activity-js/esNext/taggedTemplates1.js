function tag(parts, ...values) {
    console.log(parts)
    console.log(values)
    return 'Another String...!'
}

const student = 'Alberto'
const situation = 'Aproved'
console.log(tag`${student} it is ${situation}...!`)
