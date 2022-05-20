const Calculator = {
    _result: 0,
    get resultado() {
        return this._result
    },
    sum(a, b = 0) {
        const sum = a + b
        this._result += sum
        return this
    },
    power(a, b) {
        const power = a ** b
        this._result += power
        return this
    },
    reset() {
        this._result = 0
        return this
    },
    log() {
        console.log(this._result)
    }
}
