const schedule = require('node-schedule')

const task1 = schedule.scheduleJob('*/5 * 23 * * 3', function () {
    console.log('Running Task 1!', new Date().getSeconds())
})

setTimeout(function () {
    task1.cancel()
    console.log('Canceling Task 1!')
}, 20000)

const rule = new schedule.RecurrenceRule()
rule.day0fWeek = [new schedule.Range(1, 5)]
rule.hour = 23
rule.second = 30

const task2 = schedule.scheduleJob(rule, function () {
    console.log('Running Task 2!', new Date().getSeconds())
})

// setImmediate
//setInterval
