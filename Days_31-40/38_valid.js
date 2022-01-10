const doublingNumber = ([...chunkOfDigit]) => {
    return chunkOfDigit.map((digit, index) => {
        if (index & 1) {
            return +digit;
        }

        const doublingDigit = Number(digit) * 2;
        const convertedNumber = doublingDigit > 9
            ? doublingDigit - 9
            : doublingDigit;

        return convertedNumber;
    })
}

// Luhn algorithm
const valid = (string) => {
    // code here
    const validRegex = /^(\d{4}\s){3}(\d{4})$/;
    const isValidNumber = validRegex.test(string);

    if (!isValidNumber) {
        return false;
    }

    const isValid = string.split(/\s/).reduce((sumOfNumber, chunkOfNumber) => {
        const convertedNumber = doublingNumber(chunkOfNumber);
        const sumOfConvertedNumber = convertedNumber.reduce((acc, cur) => acc + cur, 0)
        
        return sumOfNumber + sumOfConvertedNumber
    }, 0)

    return isValid % 10 === 0;
}

console.log(valid('4539 3195 0343 6467'))
// 8569 6195 0383 3437
