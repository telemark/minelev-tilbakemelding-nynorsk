const slugify = require('@sindresorhus/slugify')
const documents = require('./documents.json')
const yff = require('./yff.json')
let table = {}

documents.behaviour.forEach(item => {
  table[slugify(item.value)] = ''
})

documents.courses.forEach(item => {
  table[slugify(item.value)] = ''
})

documents.order.forEach(item => {
  table[slugify(item.value)] = ''
})

documents.samtale.forEach(item => {
  table[slugify(item.value)] = ''
})

documents.period.forEach(item => {
  table[slugify(item.value)] = ''
})

yff.evaluation.forEach(item => {
  table[slugify(item.value)] = ''
})

console.log(JSON.stringify(table, null, 2))
