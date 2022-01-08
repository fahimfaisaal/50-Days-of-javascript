const totalGrains = () => {
    // Code here
    let totalGrains = 0;

    for (let i = 0; i < 64; i++) {
        totalGrains += Math.pow(2, i);
    }

    return BigInt(totalGrains) - 1n;
}

const grainsOn = (input) => {
    // Code here
    return BigInt(Math.pow(2, input - 1));
}

console.log(`Grains on 5th square: ${grainsOn(5)}`);
console.log(`Total grains upto 5th square: ${totalGrains(5)}`);