
function solve(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    console.log(sum);
    let sum1 = 0;
    array.forEach(element =>{
        sum1 += (1/element);
    })
    console.log(sum1);
    result = '';
    array.forEach(element => {
        result = result + String(element);
    })
    console.log(result);
}
