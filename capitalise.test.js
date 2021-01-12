const capitalise = require('./capitalise.js') 

test('capitalise first letter of string', () => {
  expect(capitalise('asdf')).toBe('Asdf')
})