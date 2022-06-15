function solve(input) {
    let countObj = {};
    let arrInput = Array.from(arguments);
    for (const current of arrInput) {
        console.log(`${typeof current}: ${current}`);
        let currentKey = typeof current;
        (!countObj[currentKey]) ? countObj[currentKey] = 1 : countObj[currentKey] = countObj[currentKey] + 1;
    }
  Object.entries(countObj).sort((a,b) => Number(b[1]) - Number(a[1])).forEach((entry) => console.log(`${entry[0]} = ${entry[1]}`));
  
}
solve({ name: 'bob'}, 3.333, 9.999);