function solve(arr){
    let resultArr = [];
    let currentNum = Number.MIN_SAFE_INTEGER;
    for (const number of arr) {
        if(number >= currentNum){
            currentNum = number;
            resultArr.push(number);
        }
    }
    return resultArr;
}