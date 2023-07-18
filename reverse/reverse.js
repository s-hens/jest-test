function reverse(string) {
    let reversedString = "";
    for (let i = 0; i <= string.length; i++) {
        let letter = string.charAt(string.length - i);
        reversedString = reversedString + letter;
    }
    return reversedString;
}

module.exports = reverse;