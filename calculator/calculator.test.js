const calculator = require("./calculator");

test("3 + 2 = 5", () => {
    expect(calculator.add(3, 2)).toEqual(5);
})

test("3 - 2 = 1", () => {
    expect(calculator.subtract(3, 2)).toEqual(1);
})

test("3 * 2 = 6", () => {
    expect(calculator.multiply(3, 2)).toEqual(6);
})

test("3 / 2 = 1.5", () => {
    expect(calculator.divide(3, 2)).toEqual(1.5);
})