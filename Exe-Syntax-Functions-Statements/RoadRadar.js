function solve(speed, area) {
    let speedLimitInSearchedZone = 0;
    let isLegal = true;
    let speedDifference = 0;
    let status = "";
    switch (area) {
        case "motorway":
            if (speed - 130 > 0) {
                isLegal = false;
                speedDifference = Math.abs(speed - 130);
            }
            speedLimitInSearchedZone = 130;
            break;
        case "interstate":
            if (speed - 90 > 0) {
                isLegal = false;
                speedDifference = Math.abs(speed - 90);
            }
            speedLimitInSearchedZone = 90;
            break;
        case "city":
            if (speed - 50 > 0) {
                isLegal = false;
                speedDifference = Math.abs(speed - 50);
            }
            speedLimitInSearchedZone = 50;
            break;
        case "residential":
            if (speed - 20 > 0) {
                isLegal = false;
                speedDifference = Math.abs(speed - 20);
            }
            speedLimitInSearchedZone = 20;
            break;
    }
    if(isLegal){
        console.log(`Driving ${speed} km/h in a ${speedLimitInSearchedZone} zone`)
    }else{
        if(speedDifference <= 20){
            status = "speeding";
        }else if(speedDifference <= 40){
            status = "excessive speeding";
        }else if(speedDifference > 40){
            status = "reckless driving";
        }
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimitInSearchedZone} - ${status}`)
    }
}

