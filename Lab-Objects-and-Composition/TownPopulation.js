function populationRegistry(arrData) {
    let towns = {};
    for (const currentTown of arrData) {
        let [townName, population] = currentTown.split(' <-> ');
        population = Number(population);
        if (towns[townName] == undefined) { towns[townName] = population }
        else {
            towns[townName] += population;
        }
    }
    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}
// populationRegistry(['Istanbul <-> 100000',
// 'Honk Kong <-> 2100004',
// 'Jerusalem <-> 2352344',
// 'Mexico City <-> 23401925',
// 'Istanbul <-> 1000']
// );