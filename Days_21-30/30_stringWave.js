function wave(str) {
    // Your Code goes below
    const waveArr = [];

    for (let i = 0; i < str.length; i++) {
        const waveString = str.substring(0, i).toLowerCase()
            + str[i].toUpperCase() 
            + str.substring(i + 1).toLowerCase();
        /\S/.test(str[i]) && waveArr.push(waveString);
    }

    return waveArr;
}

console.log(wave("two words"));
