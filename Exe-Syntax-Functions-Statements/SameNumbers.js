function solve(theNumber){
    let stringNumber = String(theNumber);
    let firstNum = stringNumber[0];
    let itsSame = true;
    let sumOfAllDigits = 0;
    for(i = 0; i < stringNumber.length; i++){
        if(stringNumber[i] != firstNum){
            itsSame = false;
        }
        sumOfAllDigits += Number(stringNumber[i]);
    }
    console.log(itsSame);
    console.log(sumOfAllDigits);
}
