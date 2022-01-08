/**
 *
 * @param {number[]} inputArray Array of numbers
 */
const longestConsecutiveSequence = (inputArray) => {
    const uniqueArray = [...new Set(inputArray)]
    return uniqueArray.filter(number => number < 10 && number > -1).length;
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]))