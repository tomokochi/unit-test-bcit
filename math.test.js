// The operation should return the sum of two numbers

const { addition } = require('/addition')

test('2 + 5 = 7', () => {
    expect(addition(2, 5)).toBe(7)
})

test.skip('3 + 9 = 12', () => {
    expect(addition(3, 9)).toBe(12)
})

test.skip('1 + 5 = 6', () => {
    expect(addition(1, 5)).toBe(6)
})