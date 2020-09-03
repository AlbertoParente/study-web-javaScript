const gulp = require('gulp')
const { series } = require('gulp')

function copy(cb) {
    console.log('Task copy!')
    return cb()
}

module.exports.default = series(copy)