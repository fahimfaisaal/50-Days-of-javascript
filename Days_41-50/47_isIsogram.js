function isIsogram(string) {
    if (string === '') {
        return true;
    }

    return string.match(/([a-z])(?!.*\1)/gi).length === string.length;
}

console.log(isIsogram("isogram"))