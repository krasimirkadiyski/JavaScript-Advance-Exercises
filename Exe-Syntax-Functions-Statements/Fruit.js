function solve(fruitType,weight,kiloPrice){
    let fruit = fruitType;
    let weightInKilo = Number(weight) / 1000;
    let price = kiloPrice;
    let neededMoney = weightInKilo * kiloPrice;
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`)
}