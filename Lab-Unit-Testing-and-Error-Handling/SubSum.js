function solve(arr, start, end){
    if(!Array.isArray(arr)){
        return NaN;
    }
    let startIndex = Math.max(start, 0);
    let endIndex = Math.max(end, 0);
    let sum = arr.slice(startIndex, endIndex + 1).map(Number).reduce((a,x) => a + x, 0)
    return sum;
}
console.log(solve('text', 0, 2));

