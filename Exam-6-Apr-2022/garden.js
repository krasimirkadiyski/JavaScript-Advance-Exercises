class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        } else {
            let plant = {
                plantName,
                spaceRequired,
                ripe: false,
                quantity: 0,
            }
            this.plants.push(plant);
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`
        }
    }
    ripenPlant(plantName, quantity) {
        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        let searchedPlant = this.plants.find((e) => e.plantName == plantName);
        if (!searchedPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (searchedPlant.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`)
        }
        searchedPlant.ripe = true;
        if (quantity == 1) {
            searchedPlant.quantity += quantity;
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            searchedPlant.quantity += quantity;
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }
    harvestPlant(plantName) {
        let searchedPlant = this.plants.find((e) => e.plantName == plantName);
        if (!searchedPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (searchedPlant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        let indexOfSearchedPlant = this.plants.indexOf(searchedPlant);
        this.spaceAvailable += searchedPlant.spaceRequired;
        this.plants.splice(indexOfSearchedPlant, 1);
        delete searchedPlant.spaceRequired;
        delete searchedPlant.ripe;
        this.storage.push(searchedPlant);
        return `The ${plantName} has been successfully harvested.`
    }
//     "The garden has { spaceAvailable } free space left."
// •	On the second line list all plants that are in the garden ordered alphabetically by plant name ascending in the format:
// "Plants in the garden: {plant1Name}, {plant2Name}, {…}"
// •	On the third line add:
// 	If there are no plants in the storage, print:
// "Plants in storage: The storage is empty."
// If there are plants in the storage list them in the format:
// "Plants in storage: {plant1Name} ({plant1Quantity}), {plant2Name}, ({plant2Quantity}), {…}"

    generateReport() {
        let sortedPlants = this.plants.sort((a,b) => (a.plantName).localeCompare(b.plantName));
        let report = [];
        report.push(`The garden has ${this.spaceAvailable} free space left.`)
        let plantsInGarden = `Plants in the garden: `;
        let allPlantInTheGarden = sortedPlants.map((e) => e.plantName).join(', ');
        
        plantsInGarden += allPlantInTheGarden;
        report.push(plantsInGarden);
        if(this.storage.length < 1){
            report.push('Plants in storage: The storage is empty.');
        }else{
            let plantInStorage = 'Plants in storage: ';
            let allPlantsInStorage = this.storage.map((e) => `${e.plantName} (${e.quantity})`).join(', ');
            plantInStorage += allPlantsInStorage;
            report.push(plantInStorage);
        }
        return report.join('\n');

    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());




