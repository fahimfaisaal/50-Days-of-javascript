function mostFreq(arr) {
    // write your code here
    const frequentsObj = arr.reduce((object, item) => ({
        [item]: item in object ? object[item]++ : 1,
        ...object
    }), {})

    const [maxKey, maxValue] = Object
        .entries(frequentsObj)
        .reduce((item, [key, value]) => (
            value > item[1] ? [key, value] : item
        ), [null, 0])
    
    return `${maxKey} ${maxValue}`;
}

const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];;

console.log(mostFreq(arr));