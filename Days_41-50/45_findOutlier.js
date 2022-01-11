function findOutlier(integers) {
    const evenOddReducer = ({ even, odd }, number) => {
        if (number & 1) {
            return {
                odd: [...odd, number],
                even
            }
        }

        return {
            even: [...even, number],
            odd
        }
    }

    const { even, odd } = integers.reduce(evenOddReducer, { odd: [], even: [] });

    return even.length < odd.length ? even.at() : odd.at();
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))