const reverse = require("./reverse");

// Requirement: Take a string and return it reversed

test("takes abcde and returns edcba", () => {
    expect (reverse("abcde")).toBe("edcba");
})