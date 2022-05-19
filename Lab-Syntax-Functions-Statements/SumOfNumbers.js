function sumOfNumbers(num1, num2) {
    let firstNumer = Number(num1);
    let secondNumber = Number(num2);
    let result = 0;
    for (let index = firstNumer; index <= secondNumber; index++) {
        result += index;
    }
    console.log(result);
}
