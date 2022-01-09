/**
 * @param {number[]} arr 
 * @returns {number|number[]}
 */
function findOdd(arr) {
    //happy coding!
    const countObj = arr.reduce((object, number) => ({
        [number]: number in object
            ? object[number]++
            : 1,
        ...object
    }), {})

    const odds = [];

    for (let key in countObj) {
        countObj[key] % 2 !== 0 && odds.push(+key);
    }
    
    return odds.length < 2 ? odds[0] : odds;
}

console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]))