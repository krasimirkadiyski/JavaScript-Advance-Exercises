function solve(nestedArr){
    let biggestNumber = Number.MIN_SAFE_INTEGER;
    for (const arr of nestedArr) {
        currentBiggestNum = Math.max(...arr);
        if(currentBiggestNum > biggestNumber){
            biggestNumber = currentBiggestNum;
        }
    }
    return biggestNumber;
}