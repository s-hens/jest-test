const capitalize = require("./capitalize");

// Requirement: Take a string and return it with only the first character capitalized

test("takes hello and returns Hello", () => {
    expect (capitalize("hello")).toBe("Hello");
})

test("takes HELLO and returns Hello", () => {
    expect (capitalize("HELLO")).toBe("Hello");
})

test("takes hElLo and returns Hello", () => {
    expect (capitalize("hElLo")).toBe("Hello");
})

test("takes h3LLO 123!! and returns H3llo 123!!", () => {
    expect (capitalize("h3LLO 123!!")).toBe("H3llo 123!!");
})

test("takes a non-string and returns nothing", () => {
    expect (capitalize(1234)).toBe();
})