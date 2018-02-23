
// index.js

const { getCoffees, getUpperCasedRoasts } = require('./api')
const uppercase = require('./util')

const coffees = getCoffees()

console.log(uppercase('hello world'))
console.log('----------------------------------------')
console.log(getUpperCasedRoasts())
