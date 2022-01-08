/**
 * @param {string} string 
 * @param {RegExp} regex 
 * @returns {string[]}
 */
const matchTheString = (string, regex) => string.match(regex) || [];
/**
 * 
 * @param {string} message 
 * @returns {string}
 */
function hey(message) {
    // Code here
    if (!message) {
        return 'Fine. Be that way!'
    }

    if (message === 'How are you?') {
        return 'Sure.';
    }

    if (matchTheString(message, /[A-Z]|[^a-z]/g).length === message.length) {
        return 'Whoa, chill out';
    }

    if (matchTheString(message, /[a-z]|[^A-Z]/g).length === message.length) {
        return 'Calm down, I know what I\'m doing!';
    }

    return 'Whatever.'
}

console.log(hey('JHDJDF SJDFHSDJF  SJDFHSDJFH?'));