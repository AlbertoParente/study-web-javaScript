var table = function makePredictiveSyntacticTable(gramatic) {
    let expressionsFirst = require("./first")(gramatic)
    let expressionsFollow = require("./follow")(gramatic)
    let info = infoTable(gramatic);
    var row = info[0].length + 1
    var column = info[1].length + 2
    var f = new Array()
    let indexX, indexY

    // Coloca as variaveis na primeira coluna e as simbolos terminais na primeira linha.
    for (i = 0; i < row; i++) {
        f[i] = new Array()
        for (j = 0; j < column; j++) {
            if (i === 0 && j > 0) {
                f[i][j] = info[1][j - 1]
            } else if (j === 0 && i > 0) {
                f[i][j] = info[0][i - 1]
            } else {
                f[i][j] = "erro"
            }
        }
    }

    // Seto a posição [0][0] para ser um valor nullo e a ultima posião
    // da primeira linha informo o simbolo do dolar.
    f[0][column - 1] = "$"
    f[0][0] = null

    for (i = 0; i < expressionsFirst.length; i++) {
        for (j = 0; j < expressionsFirst[i].firsts.length; j++) {
            for (z = 0; z < f.length; z++) {
                if (f[z][0] === expressionsFirst[i].variable) {
                    indexY = z
                }
            }
            if (expressionsFirst[i].firsts.indexOf("0") !== -1) {
                for (m = 0; m < expressionsFollow.length; m++) {
                    if (expressionsFollow[m].followers.indexOf("$") !== -1) {
                        indexX = f[0].length - 1
                    } else {
                        for (n = 0; n < expressionsFollow[m].followers.length; n++) {
                            for (o = 0; o < f[0].length; o++) {
                                if (f[0][o] === expressionsFollow[m].followers[n]) {
                                    indexX = o
                                }
                            }
                        }
                    }
                }
            } else {
                for (x = 0; x < f[0].length; x++) {
                    if (f[0][x] === expressionsFirst[i].firsts[j]) {
                        indexX = x
                    }
                }
            }
            f[indexY][indexX] = expressionsFirst[i].line
        }
    }

    return f
}

function infoTable(gramatic) {
    let info = []
    let variables = []
    let terminalSymbols = []

    for (let e of gramatic) {
        if (e.match(/[A-Z]/)) {
            variables.push(e)
        } else if (e.match(/[a-z]/)) {
            terminalSymbols.push(e)
        }
    }

    variables = [...new Set(variables)] // torno os valores unicos caso se repitão
    terminalSymbols = [...new Set(terminalSymbols)] // torno os valores unicos caso se repitão
    terminalSymbols = terminalSymbols.sort()  // Aqui eu ordeno
    info.push(variables)
    info.push(terminalSymbols)

    return info
}

module.exports = table
