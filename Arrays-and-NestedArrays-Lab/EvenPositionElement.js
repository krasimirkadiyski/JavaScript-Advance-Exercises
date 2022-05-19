function solve(arr) {
    let stringOutput = '';
    for (let index = 0; index < arr.length; index += 2) {
       stringOutput += arr[index] + ' ';
    }
    console.log(stringOutput);
}
