/**
 * @param {string} string 
 * @returns {string}
 */
function spinWords(string) {
    const stringToArray = string.split(' ');

    return stringToArray.reduce((result, word) => (
        `${result} ${word.length > 4 ? reverseWord(word) : word}`
    ), '').trim();
}

/**
 * @param {string} word 
 * @returns {string}
 */
function reverseWord([...word]) {
    return word.reverse().join('');
}

console.log(spinWords("Hey fellow warriors"));