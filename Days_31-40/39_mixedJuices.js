const mixedJuices = {
    times: {
        'Pure Strawberry Joy': 0.5,
        'Energizer': 1.5,
        'Green Garden': 1.5,
        'Tropical Island': 3,
        'Other': 2.5,
        'All or Nothing': 5,
    },
    limes: {
        small: 6,
        medium: 8,
        large: 10
    }
}

const timeToMixJuice = (name) => {
    // code here
    const selectedJuice = mixedJuices.times[name];

    return selectedJuice ? selectedJuice : mixedJuices.times['Other']
}

const limesToCut = (wedgesNeeded, limes) => {
    // code here
    return limes.reduce(([numberOfLimes, totalWedges], lime) => {
        const totalWedge = mixedJuices.limes[lime] + totalWedges;

        if (totalWedges < wedgesNeeded) {
            return [++numberOfLimes, totalWedge];
        }

        return [numberOfLimes, totalWedge]
    }, [0, 0]).at()
}

const remainingOrders = (timeLeft, orders) => {
    // code here
    if (!timeLeft) {
        return []
    }

    const initialResult = {
        remainOrder: [],
        totalTime: 0
    }

    const getOrders = orders.reduce(({ remainOrder, totalTime }, order) => {
        const timeOfOrder = mixedJuices.times[order];

        return {
            remainOrder: timeLeft > totalTime ? remainOrder : [...remainOrder, order],
            totalTime: totalTime + timeOfOrder
        };
    }, initialResult)

    return getOrders.remainOrder;
}

console.log(timeToMixJuice('Tropical Island'));
console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']));
console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']));