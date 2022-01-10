function nthlargest(arr, highest) {
    // write your code here
    return Math.max(...arr.slice(0, highest + 1))
}

const arr = [10, 100, 1000, 10000];
const highest = 2;

console.log(nthlargest(arr, highest));