function solve(nestedArr){
    let firstDiagonal = [];
    let secondDiagonal = [];
    for(let i = 0; i < nestedArr.length; i++){
        firstDiagonal.push(nestedArr[i][i])
        secondDiagonal.push(nestedArr[i][nestedArr[i].length - 1 -i])
    }
    let sumFirstDiagonal = firstDiagonal.reduce((acc,a) => acc + a,0);
    let sumSecondDiagonal = secondDiagonal.reduceRight((acc,a) => acc + a,0);
    return sumFirstDiagonal + " " + sumSecondDiagonal;
}
