function solution() {
    let inStock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    let receptions = {
        apple: { carbohydrate: 1, flavour: 2, },
        lemonade: { carbohydrate: 10, flavour: 20, },
        burger: { carbohydrate: 5, fat: 7, flavour: 3, },
        eggs: { protein: 5, fat: 1, flavour: 1, },
        turkey: { protein: 10, carbohydrate: 10,fat: 10, flavour: 10, },
    }
    return function () {
        let [a, b, c] = Array.from(arguments)[0].split(' ');
        c = Number(c);
        switch (a) {
            case 'restock':
                inStock[b] = inStock[b] + c;
                return 'Success';
            case 'prepare':
                let ingredients = Object.entries(receptions[b]);    
                let neededIngredient = '';
                for (const current of ingredients) {
                    let [ingredient, quantity] = current;
                    quantity = quantity * c;
                    //check
                    if (inStock[ingredient] < quantity) {
                        neededIngredient = ingredient;
                        return `Error: not enough ${neededIngredient} in stock`
                    }
                }
                    // prepare
                    for (const current of ingredients) {
                        let [ingredient, quantity] = current;
                        quantity = quantity * c;
                        inStock[ingredient] = inStock[ingredient] - quantity;
                    }
                    return 'Success'
                
            case 'report':
                let report = [];
                Object.entries(inStock).forEach((e) => report.push(`${e[0]}=${e[1]}`));
                return report.join(' ');
        }
    }
}
let manager = solution();
console.log(manager('prepare turkey 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));



