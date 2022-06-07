function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      
      let arrOfRestaurantObjects = [];
      //needed fields
      let inputField = document.querySelector('#inputs textarea');
      let outputParaRestaurants = document.querySelector('#bestRestaurant p');
      let outputParaWorkers = document.querySelector('#workers p');
      //reset fields
      outputParaWorkers.textContent = '';
      outputParaRestaurants.textContent = '';

      let inputArr = JSON.parse(inputField.value);
      for (const currentRestaurant of inputArr) {
         let currentObj = {};
         let [restaurantName, ...employeesData] = currentRestaurant.split(' - '); 
         //check restraurant allready exist
         for (const restaurant of arrOfRestaurantObjects) {
            let currentRestaurantName = (Object.keys(restaurant))[0];
            if(currentRestaurantName == restaurantName){
               currentObj = restaurant;
               break;
            }
         }
         currentObj['name'] = restaurantName;
         employeesData = employeesData[0].split(/,* +/);
         while (employeesData.length > 0) {
            let [name, salary] = employeesData;
            employeesData.shift();
            employeesData.shift();
            salary = Number(salary);
            currentObj[name] = salary;
         }
            if(!arrOfRestaurantObjects.includes(currentObj)){
               arrOfRestaurantObjects.push(currentObj);
            }
      }
         for (const restaurant of arrOfRestaurantObjects) {
            let salaryArr = (Object.values(restaurant)).slice(1);
            let bestSalary = (salaryArr.sort(function(a,b){return b - a})[0]).toFixed(2);
            let salarySum = salaryArr.reduce(function(a, b){
               return a + b;
           }, 0);
            let avgSalary = ((salarySum / salaryArr.length)).toFixed(2);
            restaurant.avgSalary = avgSalary;
            restaurant.bestSalary = bestSalary;
         }
        arrOfRestaurantObjects.sort(function(a,b){return b.avgSalary - a.avgSalary});
        let bestRestaurantObject = arrOfRestaurantObjects[0];
        let entries = Object.entries(bestRestaurantObject);
        let employees = entries.slice(1,entries.length - 2).sort((a,b) => {return b[1] - a[1]});
        
        for (const employee of employees) {
           let name = employee[0];
           let salary = employee[1];
           outputParaWorkers.textContent += `Name: ${name} With Salary: ${salary} `;
        }
        
        outputParaRestaurants.textContent = (`Name: ${bestRestaurantObject.name} Average Salary: ${bestRestaurantObject.avgSalary} Best Salary: ${bestRestaurantObject.bestSalary}`)
      
   }
}