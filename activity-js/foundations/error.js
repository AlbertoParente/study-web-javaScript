function handleErrorAndLaunch(error){
   // throw new Error('Test...')
   // throw 10
   // throw true
   // throw 'Message'
    throw {
        name: error.name = 'Error',
        msg: error.message = 'Test',
        date: new Date
    }
}

function printNameUppercase(obj) {
    try {
        console.log(obj.name.toUppercase() + '!!!')
    } catch(e) {
        handleErrorAndLaunch(e)
    } finally {
        console.log('Final')
    }
}

const obj = { name: 'Alberto' }
printNameUppercase(obj)