function getDivisorsCnt(number) {
    let divisorCounter = 1;
    
    for (let num = 1; num < number; num++) {
        number % num === 0 && divisorCounter++;
    }

    return divisorCounter;
}

console.log(getDivisorsCnt(30))