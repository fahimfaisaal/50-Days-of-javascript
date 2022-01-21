/**
 * @param {number} position 
 * @returns {string}
 */
function fibonacci(position) {
    let firstDigit = 0n;
    let secondDigit = 1n;

    for (let i = 1; i < position; i++) {
        const sumOfNumbers = firstDigit + secondDigit;
        [firstDigit, secondDigit] = [secondDigit, sumOfNumbers];
    }
  
  return String(position ? secondDigit : firstDigit);
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`)
