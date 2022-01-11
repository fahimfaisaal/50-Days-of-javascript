function sumTwoSmallestNumbers(numbers) {
    //Code below
    const firstMinNumber = Math.min(...numbers);
    const secondMinNumber = Math.min(...numbers.filter(number => number !== firstMinNumber));

    return firstMinNumber + secondMinNumber;
}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))