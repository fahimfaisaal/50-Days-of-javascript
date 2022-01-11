/**
 * @param {number} seconds 
 * @param {number} unitCondition
 * @param {number} unit 
 * @returns {[remainSeconds, unit]}
 */
function durationReducer(seconds, unitCondition) {
    let unit = 0;
    let remainSeconds = seconds

    while (remainSeconds >= unitCondition) {
        remainSeconds -= unitCondition;
        unit++;
    }

    return [remainSeconds, unit];
}

const formatDurationToString = (durations) => {
    const durationToArr = Object.entries(durations);
    return durationToArr.reduce((string, [key, value], index) => (
        value
            ? `${string}${value} ${key}${value > 1 ? 's' : ''}${index === durationToArr.length - 2 ? ' and ' : ', '}`
            : string
    ), '').replace(/(\sand\s)|(,\s)$/, '');
}

/**
 * @param {number} seconds 
 * @returns {string}
 */
function formatDuration(seconds) {
    const second = 1;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    const [remainSecondsFromYears, numberOfYears] = durationReducer(seconds, year);
    const [remainSecondsFromDays, numberOfYDays] = durationReducer(remainSecondsFromYears, day);
    const [remainSecondsFromHours, numberOfHours] = durationReducer(remainSecondsFromDays, hour);
    const [remainSecondsFromMinutes, numberOfMinutes] = durationReducer(remainSecondsFromHours, minute);
    const [, numberOfSeconds] = durationReducer(remainSecondsFromMinutes, second);
    
    const durations = {
        year: numberOfYears,
        day: numberOfYDays,
        hour: numberOfHours,
        minute: numberOfMinutes,
        second: numberOfSeconds,
    };

    return formatDurationToString(durations);
}

console.log(formatDuration(4500));
