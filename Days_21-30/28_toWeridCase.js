function toWeirdCase([...string]) {
    // Your code goes here
    return string.map((letter, index) => index % 2 ? letter : letter.toUpperCase()).join('');
}

console.log(
    `The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
);
