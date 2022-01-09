const uniqueInOrder = ([...iterable]) => {
    //your code here - remember iterable can be a string or an array
    return iterable.reduce((orderedArr, letter, index) => (
        letter !== iterable[index + 1]
            ? [...orderedArr, letter]
            : orderedArr
    ), [])
};


console.log(uniqueInOrder([1, 2, 2, 3, 3]))
