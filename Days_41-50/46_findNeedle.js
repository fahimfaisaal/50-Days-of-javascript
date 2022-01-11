function findNeedle(haystack) {
    const indexOfNeedle = haystack.indexOf('needle');

    return `found the needle at position ${indexOfNeedle}`;
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))