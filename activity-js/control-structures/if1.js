function onlyGoodNews(note) {
    if(note >= 7) {
        console.log('Approved with' + note)
    }
}

onlyGoodNews(8.1)
onlyGoodNews(6.1)

function ifItIsTrue(value) {
    if(value) {
        console.log('Is True...' + value)
    }
}

ifItIsTrue()
ifItIsTrue(null)
ifItIsTrue(undefined)
ifItIsTrue(NaN)
ifItIsTrue('')
ifItIsTrue(0)
ifItIsTrue(-1)
ifItIsTrue(' ')
ifItIsTrue('?')
ifItIsTrue([])
ifItIsTrue([1, 2])
ifItIsTrue({})