class SmartHike{
    constructor(username){
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal (peak, altitude){
        let keys = Object.keys(this.goals);
        if(keys.includes(peak)){
            return(`${peak} has already been added to your goals`);
        }else{
            this.goals[peak] = altitude;
            return(`You have successfully added a new goal - ${peak}`);
        }
    }
    hike (peak, time, difficultyLevel){
        let keys = Object.keys(this.goals);
        if(!keys.includes(peak)){
            throw new Error(`${peak} is not in your current goals`);
        }else{
            if(this.resources == 0){
                throw new Error(`You don't have enough resources to start the hike`);
            }else{
                let neededResources = time * 10;
                if(this.resources - neededResources < 0){
                    return(`You don't have enough resources to complete the hike`);
                }else{
                    this.resources -= neededResources;
                    let messageReturn = `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
                    this.listOfHikes.push({peak,time,difficultyLevel}); 
                    return messageReturn;
                }
            }
        }
    }
    rest (time){
        let chargedResources = time * 10;
        if(chargedResources + this.resources >= 100){
            this.resources = 100;
            return(`Your resources are fully recharged. Time for hiking!`);
        }else{
            this.resources += chargedResources;
            return(`You have rested for ${time} hours and gained ${chargedResources}% resources`)
        }
    }
    sdad.addEventListener('click' )
    showRecord (crt){
        if(!this.listOfHikes.length){
            return(`${this.username} has not done any hiking yet`);
        }else{
            if(crt !== 'all'){
            let newArrBySearchedCriteria = this.listOfHikes.filter((e) => e.difficultyLevel == crt);
            if(newArrBySearchedCriteria.length == 0){
                return (`${this.username} has not done any ${crt} hiking yet`)
            }else{
                newArrBySearchedCriteria = newArrBySearchedCriteria.sort((a,b) => a.time - b.time);
                let resultObj = newArrBySearchedCriteria[0];
                return(`${this.username}'s best ${crt} hike is ${resultObj.peak} peak, for ${resultObj.time} hours`)
            } 
        }
    }
    let arr = [];
    arr.push("All hiking records:");
    this.listOfHikes.forEach((e) => arr.push(`${this.username} hiked ${e.peak} for ${e.time} hours`))
    return arr.join('\n');
}
}

const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.showRecord('easy'));
console.log(user.addGoal('Vihren', 2914)); 
console.log(user.hike('Vihren', 4, 'hard'));
console.log(user.showRecord('hard'));
console.log(user.addGoal('Rui', 1706));
console.log(user.rest(5));
console.log(user.hike('Rui', 3, 'easy'));
console.log(user.showRecord('all'));


