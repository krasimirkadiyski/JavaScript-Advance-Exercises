function getFibonator() {
    let currentNums = [0, 1];
    return function () {
        let sum = currentNums[0] + currentNums[1];
        currentNums[0] = currentNums[1];
        currentNums[1] = sum;
        return currentNums[0];
    }
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
