function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

let arrayLength = 100;
let results = [];
for (let i = arrayLength; i >= 1; i--) {
    if (!isPrime(i)) {
        if (i % 5 == 0 && i % 3 == 0) {
            results.push("FooBar");
        } else if (i % 3 == 0) {
            results.push("Foo");
        } else if (i % 5 == 0) {
            results.push("Bar");
        } else {
            results.push(i);
        }
    }
}
console.log(results.join(","));
