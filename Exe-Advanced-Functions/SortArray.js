function solve(arr,rule){
    let sortedArr = rule == 'asc' ? arr.sort((a,b) => a - b) : arr.sort((a,b) => b - a);
    return sortedArr;
}
solve([14, 7, 17, 6, 8], 'desc');