function solve(data) {
let resultArr = [];
for (const current of data) {
    let [town,product,price] = current.split(' | ');
    price = Number(price);
    if(resultArr.filter(x => x.product === product).length > 0){
        let index = resultArr.findIndex(x => x.product === product);
        if(resultArr[index].price > price){
            resultArr[index] = {town,product,price}
        }
    }else{
        resultArr.push({town,product,price});
    }
}
for (const x of resultArr) {
    console.log(`${x.product} -> ${x.price} (${x.town})`)
}

}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);