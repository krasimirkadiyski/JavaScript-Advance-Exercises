function solve(matrix) {
    let sum = 0;
    for (const number of matrix[0]) {
        sum += number
    }
    let currentSum = 0;
    let isItMagic = true;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            currentSum += matrix[row][col];
        }
        if(currentSum != sum){
            isItMagic = false;
            break;
        }else{
            currentSum = 0;
        }
    }
    for (let col = 0; col < matrix.length; col++) {
        for (let row = 0; row < matrix.length; row++) {
            currentSum += matrix[row][col];
        }
        if(currentSum != sum){
            isItMagic = false;
            break;
        }else{
            currentSum = 0;
        }
    }
    return console.log(isItMagic)
}
