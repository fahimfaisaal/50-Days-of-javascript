const isTriangle = (a, b, c) => (a + b > c) && (b + c > a) && (c + a > b);


function Person(name = 'ujjal', age = 24) {
    this.name = name;
    this.age = age
}

console.log(Person())