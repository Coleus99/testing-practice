const calculator = require('./calculator')

test('add', () =>{
  expect(calculator.add(1,2)).toBe(3)
})

test('minus', () =>{
  expect(calculator.minus(5,3)).toBe(2)
})

test('multiply', () => {
  expect(calculator.multiply(4,3)).toBe(12)
})

test('divide',() => {
  expect(calculator.divide(10,2)).toBe(5)
})