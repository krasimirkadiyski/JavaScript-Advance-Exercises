function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let objectsRestaurants = [];
      let inputField = document.querySelector('#inputs textarea');
      let outputParaRestaurants = document.querySelector('#bestRestaurant p');
      let outputParaWorkers = document.querySelector('#workers p');
      let inputArr = JSON.parse(inputField.value);
      for (const currentRestaurant of inputArr) {
         let currentObj = {};
         let [restaurantName, ...employeesData] = currentRestaurant.split(' - '); 
         for (const restaurant of objectsRestaurants) {
            let currentRestaurantName = (Object.keys(restaurant))[0];
            if(currentRestaurantName == restaurantName){
               currentObj = restaurant;
               break;
            }
         }
         currentObj[restaurantName] = restaurantName;
         employeesData = employeesData[0].split(/,* +/);
         while (employeesData.length > 0) {
            let [name, salary] = employeesData;
            employeesData.shift();
            employeesData.shift();
            salary = Number(salary);
            currentObj[name] = salary;
         }
            if(!objectsRestaurants.includes(currentObj)){
               objectsRestaurants.push(currentObj);
            }
      }
         for (const restaurant of objectsRestaurants) {
            
            let salaryArr = (Object.values(restaurant)).slice(1);
            console.log(salaryArr);
            let salarySum = salaryArr.reduce(function(a, b){
               return a + b;
           }, 0);
            let avgSalary = (salarySum / salaryArr.length)
            console.log(avgSalary);

         }
   }
}