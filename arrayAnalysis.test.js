const AnalyzeArray = require('./arrayAnalysis')

test('empty array', () => {
  expect(AnalyzeArray([])).toBeNull();
})

test('small positive integers', () => {
  expect(AnalyzeArray([0,1,2,3])).toStrictEqual({
    average: 1.5,
    minimum: 0,
    maximum: 3,
    length: 4,
  })
})

test('large positive integers', () => {
  expect(AnalyzeArray([10000,20000,30000])).toStrictEqual({
    average: 20000,
    minimum: 10000,
    maximum: 30000,
    length: 3,
  })
})

test('small negative integers', () => {
  expect(AnalyzeArray([-1,-2,-3])).toStrictEqual({
    average: -2,
    minimum: -3,
    maximum: -1,
    length: 3,
  })
})

test('large negative integers', () => {
  expect(AnalyzeArray([-10000,-20000,-30000])).toStrictEqual({
    average: -20000,
    minimum: -30000,
    maximum: -10000,
    length: 3,
  })
})

test('mix positive & negative', () => {
  expect(AnalyzeArray([34,-12,15])).toStrictEqual({
    average: 12.3,
    minimum: -12,
    maximum: 34,
    length: 3,
  })
})