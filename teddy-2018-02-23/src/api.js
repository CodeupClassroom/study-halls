// api.js

const uppercase = require('./util')

const getCoffees = () => [
  {roast: 'light', name: 'codeup special!'},
  {roast: 'medium', name: 'medium coffee blend'}
]

const getUpperCasedRoasts = () => ['light', 'medium', 'dark'].map(uppercase)

module.exports = { getCoffees, getUpperCasedRoasts }
