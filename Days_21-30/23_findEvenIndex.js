const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

const findEvenIndex = (arr) => {
    let evenIndex = -1;

    for (let i = 1; i < arr.length; i++) {
        const leftSideSum = sum(arr.slice(0, i));
        const rightSideSum = sum(arr.slice(i + 1, arr.length));

        if (leftSideSum === rightSideSum) {
            evenIndex = i;
            break;
        }
    }

    return evenIndex;
}

console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));