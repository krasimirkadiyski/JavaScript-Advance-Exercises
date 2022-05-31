function solve(arr) {
    let resultArr = [];
    for (const currentHero of arr) {
        let currentHeroData = currentHero.split(' / ');
        let name = currentHeroData[0];
        let level = Number(currentHeroData[1]);
        let items = [];
        if (currentHeroData[2]) {
            items = currentHeroData[2].split(', ');
        }
        let objHero = {
            name,
            level,
            items,
        }
        resultArr.push(objHero);
    }
    console.log(JSON.stringify(resultArr));


}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);