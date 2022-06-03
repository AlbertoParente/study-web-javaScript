const prompt = require("prompt-sync")()

console.log("\nAs expressões são divididas pelo ';' ...")
console.log("\nExemplo de expressões validas: \n\" S->AB;A->aA|a;B->bB|b \"")
console.log("\" S->ABCDE;A->a|0;B->b|0;C->c;D->d|0;E->e|0 \"")
console.log("\" S->A|B;A->aA|a;B->CB|c;C->c|c \"")
console.log("\" S->cAa;A->cB|B;B->bcB|0 \"\n")

const expression = prompt("Por Favor insira uma expressão valida: ")
var productionsFirsts = require("./first")(expression)
var productionsFollowers = require("./follow")(expression)
var table = require("./table")(expression)

console.log("============================================================")
console.log("====================\tFirsts\t============================")
for (let productionFirst of productionsFirsts) {
    console.log("First " + productionFirst.variable + " = " + productionFirst.firsts)
}

console.log("============================================================");
console.log("====================\tFollowers\t====================")
for (let productionFollower of productionsFollowers) {
    console.log("Follow " + productionFollower.variable + " = " + productionFollower.followers)
}
console.log("============================================================")
console.log("====================\tPreditive Table\t====================")
console.table(table)
