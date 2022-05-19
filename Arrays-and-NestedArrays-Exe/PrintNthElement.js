function solve(arr, n) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i += n) {
        resultArr.push(arr[i]);
    }
    return resultArr;
}
