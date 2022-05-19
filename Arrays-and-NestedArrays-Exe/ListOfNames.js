function solve(arr){
    arr.sort((a,b) => a.localeCompare(b));
    
    for (const name of arr) {
        console.log(`${arr.indexOf(name) + 1}.${name}`)
    }
}

