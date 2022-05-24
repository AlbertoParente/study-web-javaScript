module.exports = function type(char) {
    if (char !== undefined) {
        if (char.match(/[A-Z]/)) {
            return "V"
        } else if (char === "0") {
            return "E"
        } else if (char.match(/[a-z]/)) {
            return "T"
        }
    } else {
        return "Undefined"
    }
}
