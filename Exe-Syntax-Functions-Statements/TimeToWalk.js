function solve(steps,footprint,kmH){
    let distanceInKm = (steps * footprint) / 1000;
    let breakTime = Math.floor((steps * footprint) / 500);
    let walkingTime = (distanceInKm / kmH) * 60;
    let totalTimeInHours = (walkingTime + breakTime) / 60;
    let hours = Math.floor(totalTimeInHours).toFixed(0).padStart(2,'0');
    let minutes = Math.floor((totalTimeInHours % 1) * 60).toFixed(0).padStart(2,'0');
    let seconds = ((totalTimeInHours % 1 * 60) % 1 * 60).toFixed(0).padStart(2,'0');
    console.log(`${hours}:${minutes}:${seconds}`);
}
