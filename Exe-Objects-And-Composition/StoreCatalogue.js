function sortAndOrder(inputArr){
    let currentLetter = "";
   inputArr.sort((a,b) => a.localeCompare(b));
   for (const current of inputArr) {
       let[product,price] = current.split(' : ');
       Number(price);
        if(product.charAt(0) != currentLetter){
            currentLetter = product[0];
            console.log(currentLetter);
        }
        console.log(`  ${product}: ${price}`)
   }

    
}
sortAndOrder(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])