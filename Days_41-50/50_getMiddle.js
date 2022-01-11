function getMiddle(s) {
    // your code here
    const len = s.length;
    const middle = Math.floor(len / 2);

    if (len & 1) {
        return s[middle]
    }

    return s[middle] + s[middle - 1]
}
