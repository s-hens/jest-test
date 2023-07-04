const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("adds 200 + 500 to equal 700", () => {
    expect(sum(200, 500)).toBe(700);
});