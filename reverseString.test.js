const reverseString = require('./reverseString')

test ('reverse text', () => {
  expect(reverseString('Trolls')).toBe('sllorT')
})