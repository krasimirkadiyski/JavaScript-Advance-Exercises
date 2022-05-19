function solve(arr) {
    let resultArr = [];
    for (let i = 1; i < arr.length; i += 2){
        resultArr.unshift(arr[i]);
    }
    resultArr = resultArr.map((e) => e*2);
    return resultArr.join(" ");
}