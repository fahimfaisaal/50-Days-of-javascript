const mumbling = (char, repeatTime) => char.toUpperCase() + char.toLowerCase().repeat(repeatTime)

const accum = ([...string]) => string.reduce((accumMumbling, char, index) => (
    `${accumMumbling}${(index ? '-' : '') + mumbling(char, index)}`
), '')

console.log(accum('ZpglnRxqenU'))