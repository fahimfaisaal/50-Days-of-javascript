// solution 1
const isPangram = (input) => {
    // Code here
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let result = true;

    for (let i = 0; i < alphabets.length; i++) {
        const alphabetRegex = RegExp(alphabets[i], 'i');
        const isExistAlphabetInInput = alphabetRegex.test(input);

        if (!isExistAlphabetInInput) {
            result = false;
            break;
        }
    }

    return result;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))

// solution 2
const isPangramWithoutLoop = (input) => (
    new Set(input.toLowerCase().match(/[a-z]/g)).size === 26
)

console.log(isPangramWithoutLoop('The quick brown fox jumps over the lazy dog.'))