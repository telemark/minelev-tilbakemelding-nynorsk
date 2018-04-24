const slugify = require('@sindresorhus/slugify')
const translate = require('./lib/data/translate.json')

module.exports = data => data ? translate[slugify(data)] || data : data
