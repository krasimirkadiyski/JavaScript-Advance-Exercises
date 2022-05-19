function solve(num1, num2) {
    let firstNum = num1;
    let secondNum = num2;
    while (firstNum !== secondNum) {
        if (firstNum > secondNum) {
            firstNum -= secondNum;
        } else {
            secondNum -= firstNum;
        }
    }
    console.log(firstNum);
}
