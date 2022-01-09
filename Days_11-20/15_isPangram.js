const isPangram = (input) => (
    input.match(/([a-z])(?!.*\1)/gi).length === 26
)

console.log(isPangram('The qQuick brown fox jumps over the lazy dog.'))