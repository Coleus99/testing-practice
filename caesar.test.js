const caesar = require('./caesar')

test ('lowercase caesar cipher shift 1 forwards', () => {
  expect(caesar('asdf',1)).toBe('bteg')
} )

test ('lowercase caesar cipher shift 1 backwards', () => {
  expect(caesar('bteg', -1)).toBe('asdf')
})

test ('lowercase cipher shifts to start of alphabet from end', () => {
  expect(caesar('wxyz', 4)).toBe('abcd')
})

test ('lowercase cipher shifts to end of alphabet from start', () => {
  expect(caesar('abcd', -4)).toBe('wxyz')
})

test('lowercase cipher accepts symbols', () => {
  expect(caesar('asdf!',1)).toBe('bteg!')
})

test ('upperCase caesar cipher shift 1 forwards', () => {
  expect(caesar('ASDF',1)).toBe('BTEG')
} )

test ('upperCase caesar cipher shift 1 backwards', () => {
  expect(caesar('BTEG', -1)).toBe('ASDF')
})

test ('upperCase cipher shifts to start of alphabet from end', () => {
  expect(caesar('WXYZ', 4)).toBe('ABCD')
})

test ('upperCase cipher shifts to end of alphabet from start', () => {
  expect(caesar('ABCD', -4)).toBe('WXYZ')
})

test('upperCase cipher accepts symbols', () => {
  expect(caesar('ASDF!',1)).toBe('BTEG!')
})