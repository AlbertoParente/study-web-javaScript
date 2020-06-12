var followers = function follow(gramatic) {
  let productions = retriveFollowProductions(gramatic)
  var firsts = require("./first")(gramatic)
  var type = require("./type")

  for(var i = 0; i < productions.length; i++) {
    for(var j = 0; j < productions.length; j++) {
  
      if(i !== j) {
        for(var x = 0; x < productions[j].expression.length; x++) {
            
          if(productions[i].variable === productions[j].expression[x]) {
            let count = 1
            let nextElement = productions[j].expression[x + count];
              
              while (true) {
                
                if(type(nextElement) === "V") {
                  let firstsOfNextElement = searchFirstExpression(nextElement,firsts)
                  if(firstsOfNextElement.indexOf("0") !== -1) {
                    let tempFirstsOfNextElement = firstsOfNextElement.filter((e) => 
                      e !== "0")
                    productions[i].followers = productions[i].followers.concat(tempFirstsOfNextElement)
                    count += 1
                    nextElement = productions[j].expression[x + count]
                  } else {
                    productions[i].followers = productions[i].followers.concat(firstsOfNextElement)
                    break
                  }
                } else if (type(nextElement) === "T") {
                  productions[i].followers.push(nextElement)
                  break
                } else {
                  productions[i].followers = productions[i].followers.concat(productions[j].followers)
                  break
                }
              }
            }
          }
        }
      }
    }
  
    for(let production of productions) {
      production.followers = [...new Set(production.followers)]
    }

  return productions
}

// Aqui eu procuro o first de cada expressão
function searchFirstExpression(e, firsts) {
  let returnableProduction
  for(let first of firsts) {
    if(first.variable === e) {
      returnableProduction = first.firsts
    }
  }

  return returnableProduction
}

// Aqui eu monto minhas produções
function retriveFollowProductions(gramatic) {
  let productions = []
  let productionsTemp = gramatic.split(";")
  var i = 0
  
  while(i < productionsTemp.length) {
    productions.push({
      variable: productionsTemp[i][0],
      expression: productionsTemp[i].split("->")[1],
      followers: i === 0 ? ["$"] : [],
    })
      i++
  }

  return productions
}

module.exports = followers