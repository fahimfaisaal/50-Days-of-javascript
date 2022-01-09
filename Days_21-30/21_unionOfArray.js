const unionOfArrays = (arr1, arr2) => {
    // code below here
    return [...new Set([...arr1, ...arr2])];
};

console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);
