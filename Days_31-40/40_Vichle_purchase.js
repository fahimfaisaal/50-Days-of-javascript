const needsLicense = (kind) => {
    // code here
    return kind === 'car' || kind === 'track';
}

const chooseVehicle = (option1, option2) => {
    // code here
    return [option1, option2].sort().shift() + ' is clearly the better choice.';
}

const discount = (price, percent) => price - price * percent;

const calculateResellPrice = (originalPrice, age) => {
    // code here
    if (age < 3) {
        return discount(originalPrice, 0.8);
    }

    if (age > 10) {
        return discount(originalPrice, 0.5);
    }

    return discount(originalPrice, 0.7);
}
