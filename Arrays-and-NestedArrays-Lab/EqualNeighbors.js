function solve(nestedArr){
    let count = 0;
    for (const arr of nestedArr) {
        if(nestedArr.indexOf(arr) == nestedArr.length - 1){
            break;
        }
        for (const element of arr) {
            let downElementRow = nestedArr.indexOf(arr) + 1;
            let downElementCol = arr.indexOf(element);
            let downElement = nestedArr[downElementRow][downElementCol];
            if(element == downElement){
                count++;
            }
        }
    }
    return count;
}
console.log(solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));