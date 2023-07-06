function capitalize(string) {
    if (typeof string == "string") {
        let firstChar = string.slice(0, 1);
        let restOfString = string.slice(1, string.length);
        let restOfStringLowercase = restOfString.toLowerCase();
        let firstCharUppercase = firstChar.toUpperCase();
        return firstCharUppercase + restOfStringLowercase;
    } else return;
}

module.exports = capitalize;