function solve(arr){
    arr.sort((a,b) => a-b);
    //[-3, 1, 3, 18, 31, 48, 52, 56, 63, 65]
    let resultArr = [];
    while(arr.length > 0){
        resultArr.push(arr.shift());
        resultArr.push(arr.pop());
    }
    // console.log(resultArr)
    return resultArr;
}
