function solve(input) {
    //TODO
    //IS NOT READY YET
    const result = [];

    const car = {
        create: (n, inherits, n2) => {
            if (inherits) {
                let parentObj = result.filter((obj) => obj.name == n2)[0];
                result.push({
                    'name': n2,
                } = Object.create(parentObj))
            } else {
                result.push({
                    'name': n,
                })
            }
        },

       
        set: (n, k, v) => {
            let searchedObj = result.filter((obj) => obj.name == n)[0];
            searchedObj[k] = v;
        },
        
        print: n => {
            let entrySet = [];
            let searchedObj = result.filter((obj) => obj.name == n)[0];
            for (const key in searchedObj) {
                entrySet.push(`${key}:${[searchedObj][key]}`);
            }
        },
    }

    input.forEach(x => {
        const [c, n, k, v] = x.split(" ");

        car[c](n, k, v);
    });
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);