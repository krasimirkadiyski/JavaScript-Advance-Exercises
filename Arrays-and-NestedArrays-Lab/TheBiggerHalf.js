function solve(arr) {
    arr.sort((a, b) => a - b);
    let startIndex = Math.ceil((arr.length - 1) / 2);
    let arrToPrint = arr.slice(startIndex ,arr.length);


    return arrToPrint;
}
