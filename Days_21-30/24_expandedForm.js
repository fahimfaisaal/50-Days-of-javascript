const expandedForm = (number, expandedNumber = '') => {
  // Your code here
    if (!number) {
        return expandedNumber.replace(/\+$/, '');
    }
    
    // i.e number = 455
    const lengthOfNumber = String(number).length; // 3
    const numberLength = 1 * Math.pow(10, lengthOfNumber - 1); // 100 formula: 1 * 10^n
    const firstDigit = Math.floor(number / numberLength); // 4
    const expandNumber = firstDigit * numberLength; // 400

    return expandedForm(number % numberLength, `${expandedNumber}${expandNumber}+` )
}

console.log(expandedForm(1015202530))