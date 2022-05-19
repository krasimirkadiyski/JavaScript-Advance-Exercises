function solve(arr, firstFlavor, secondFlavor) {
    let startIndex;
    let endIndex;
    for (const element of arr) {
        if (element == firstFlavor) {
            startIndex = arr.indexOf(element);
        } else if (element == secondFlavor) {
            endIndex = arr.indexOf(element);
        }
    }
    let resultArr = arr.slice(startIndex, endIndex + 1);
    return resultArr;
}
