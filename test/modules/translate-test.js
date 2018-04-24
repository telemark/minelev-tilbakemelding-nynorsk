const test = require('ava')
const translate = require('../../index')

test('returns nothing if nothing is passed in', t => {
  const expectedResult = ''
  t.is(translate(''), expectedResult)
})

test('returns expected result', t => {
  const expectedResult = 'Du er for sein til undervisning'
  t.is(translate('Du er for sen til undervisning'), expectedResult)
})

test('returns input if no translation is found', t => {
  const expectedResult = 'Aldri så jeg slik en himmel blå'
  t.is(translate('Aldri så jeg slik en himmel blå'), expectedResult)
})
