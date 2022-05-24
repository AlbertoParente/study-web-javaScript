var firsts = function first(gramatic) {
    let productions = retrieveFirstProductions(gramatic)
    var type = require("./type")

    for (let production of productions) {
        let count = 0
        let hadReplacement = false
        for (var i = 0; i < production.possibleFirstElements.length; i++) {

            // Aqui eu faço as verificações se o elemento é um simbolo terminal, uma variavel ou epslo
            while (true) {

                if (type(production.possibleFirstElements[i]) === "V") {
                    let found = productions.find((e) =>
                        e.variable === production.possibleFirstElements[i]
                    )
                    production.possibleFirstElements = production.possibleFirstElements.filter((possibleFirstElement) =>
                        possibleFirstElement !== production.possibleFirstElements[i]
                    )
                    production.possibleFirstElements = production.possibleFirstElements.concat(found.possibleFirstElements)
                    hadReplacement = true
                } else if (type(production.possibleFirstElements[i]) === "E") {
                    if (hadReplacement) {
                        if (production.expression[count + 1].match(/[A-Z]/)) {
                            ++count
                            production.possibleFirstElements.push(production.expression[count])
                        }
                    }
                    production.firsts.push("0")
                    i++
                } else {
                    production.firsts.push(production.possibleFirstElements[i])
                    break
                }
            }
        }

        // torno os valores unicos
        production.firsts = [...new Set(production.firsts)]

        var index = production.firsts.indexOf(undefined)
        if (index !== -1) production.firsts.splice(index, 1)

        if (hadReplacement) {
            if (production.possibleFirstElements[production.length - 1] !== "0") {
                production.firsts = production.firsts.filter((terminalSymbol) =>
                    terminalSymbol !== "0"
                )
            }
        }
    }

    // Ordeno o meu array
    for (let production of productions) {
        production.firsts = production.firsts.sort()
    }

    return productions
}
// S -> aB|C
function getPossibleFirstElements(production) {
    let possibleFirstElements = []

    possibleFirstElements.push(production.split("->")[1][0]).toString()

    for (var i = 0; i < production.length; i++) {
        if (production[i] === "|") {
            possibleFirstElements.push(production[i + 1]).toString()
        } else if (production[i] === "0") {
            if (production[i + 1] !== undefined) {
                if (production[i + 1].match(/[A-Z]/)) possibleFirstElements.push(production[i + 1])
            }
            possibleFirstElements.push("0")
        }
    }
    possibleFirstElements = [...new Set(possibleFirstElements)]
    console.log(possibleFirstElements)
    return possibleFirstElements
}

function retrieveFirstProductions(gramatic) {
    let productions = []
    let productionsTemp = gramatic.split(";")

    for (let productionTemp of productionsTemp) {
        productions.push({
            variable: productionTemp[0],
            expression: productionTemp.split("->")[1],
            possibleFirstElements: getPossibleFirstElements(productionTemp),
            line: productionTemp, firsts: [],
        })
    }

    return productions
}

module.exports = firsts
