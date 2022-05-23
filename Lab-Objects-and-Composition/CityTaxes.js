function cityTaxes(name, population, treasury) {
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() { this.treasury += (this.taxRate * this.population) },
        applyGrowth(percentage){this.population += (this.population / 100) * percentage},
        applyRecession(percentage){this.treasury -= (this.treasury / 100) * percentage},
    };
}

// const city = 
//   cityTaxes('Tortuga',
//   7000,
//   15000);
// console.log(city);


