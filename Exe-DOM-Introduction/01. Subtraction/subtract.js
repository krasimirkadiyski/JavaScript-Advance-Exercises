function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secondNum = document.getElementById('secondNumber').value;
    let resultField = document.getElementById('result');
    let firstNumAsNumber = Number(firstNum);
    let secondNumAsNumber = Number(secondNum);

    let result = firstNumAsNumber - secondNumAsNumber;

    resultField.textContent = result;
}