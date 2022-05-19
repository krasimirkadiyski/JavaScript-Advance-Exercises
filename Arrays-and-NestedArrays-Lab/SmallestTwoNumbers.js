function solve(arr){
    let restult = [];
    while(restult.length < 2){
        let smallestNumber = Math.min(...arr);
        let indexToRemove = arr.indexOf(smallestNumber);
        restult.push(smallestNumber);
        arr.splice(indexToRemove,1);
    }
    console.log(restult.join(' '));
}