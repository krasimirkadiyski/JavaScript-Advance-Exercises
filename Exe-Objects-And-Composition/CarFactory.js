function addingPropertiesToCarObject(car){
    let currentCar = {};
    currentCar.model = car.model;
    currentCar.engine = {};
    if(car.power <= 90){
        currentCar.engine.power = 90;
        currentCar.engine.volume = 1800;
    }else if(car.power <= 120){
        currentCar.engine.power = 120;
        currentCar.engine.volume = 2400;
    }else if(car.power > 120){
        currentCar.engine.power = 200;
        currentCar.engine.volume = 3500; 
    }
    currentCar.carriage = {};
    currentCar.carriage.type = car.carriage;
    currentCar.carriage.color = car.color;
    if(car.wheelsize % 2 == 0){
        car.wheelsize -= 1;
    }
    currentCar.wheels = [car.wheelsize,car.wheelsize,car.wheelsize,car.wheelsize];
    return currentCar;
}
addingPropertiesToCarObject({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)
//expected output!
// { model: 'VW Golf II',
//   engine: { power: 90,
//             volume: 1800 },
//   carriage: { type: 'hatchback',
//               color: 'blue' },
//   wheels: [13, 13, 13, 13] }
