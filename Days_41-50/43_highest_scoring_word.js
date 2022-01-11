/**
 * @param {string} string 
 * @returns {number}
 */
function high(string) {
    const stringToLowercase = string.toLowerCase()
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const generateWordScore = ([...word]) => {
        return word.reduce((accumulatorScore, letter) => alphabet.indexOf(letter) + accumulatorScore + 1 ,0)
    }

    const highestScoringReducer = (accumulator, word) => {
        const wordScore = generateWordScore(word);

        if (wordScore > accumulator.score) {
            accumulator.score = wordScore;
            accumulator.word = word;
        }

        return accumulator;
    }

    const scoringWordAccumulator = {
        word: null,
        score: 0
    }
    const highestScoringWord = stringToLowercase.split(/\s/).reduce(highestScoringReducer, scoringWordAccumulator) 

    return highestScoringWord.word;
}

console.log(high('man i need a taxi up to ubud'))