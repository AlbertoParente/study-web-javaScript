const scores = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// No callback
const lowScore1 = []
for(let i in scores) {
    if(scores[i] < 7) {
        lowScore1.push(scores[i])
    }
}

console.log(lowScore1)

// With callback
const lowScore2 = scores.filter(function(score) {
    return score < 7
})

console.log(lowScore2)

const lowScore3 = scores.filter(score => score < 7)
console.log(lowScore3)

const scoreSmaller7 = score => score < 7
const lowScore4 = scores.filter(score => score < 7)
console.log(lowScore4)