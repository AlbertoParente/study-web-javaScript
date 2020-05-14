function real(parts, ...values) {
    const result = []
    values.forEach((value , index) => {
        value = isNaN(value) ? value : `R$${value.toFxed(2)}`
        result.push(parts[index], value)
    })
    return result.join('')
}

const price = 39.9
const priceParcel = 11
console.log(real `1x of ${price} or 3x of ${priceParcel}.`)