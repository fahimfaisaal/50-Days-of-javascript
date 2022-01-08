const validateResult = (result, baseB) => {
    const bases = {
        2: /[^0-1]/g,
        8: /[^0-7]/g,
        10: /[^0-9]/g,
        16: /[a-f]/g
    }

    let array;
    const resultToArray = [...result];

    while (array = bases[baseB].exec(result)) {
        resultToArray[array.index] = parseInt(array[0], baseB)
    }

    return resultToArray;
}

/**
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
const convertDigitsToAskedBase = (digits, baseA, baseB) => {
    // Your code here
    const digitNumber = digits.join('');
    let convertedResult;

    if (baseA !== 16) {
        const convertToBaseB = Number(digitNumber).toString(baseB);
        convertedResult = validateResult(convertToBaseB, baseB).map(Number);
    } else {
        const convertToBaseB = parseInt(digitNumber, baseA);
        convertedResult = convertToBaseB.toString().split('').map(Number);
    }

    return convertedResult;
}

console.log(convertDigitsToAskedBase(['3', 'a'], 16, 10));