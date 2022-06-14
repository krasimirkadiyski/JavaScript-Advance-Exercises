function solve(area, vol, input){
    let resultArr = [];
    input = JSON.parse(input);
    for (const currentObj of input) {
        let currentArea = area.call(currentObj);
        let currentVol = vol.call(currentObj);
        let newObj = {
            'area': currentArea,
            'volume': currentVol,
        }
        resultArr.push(newObj);
    }
    return resultArr;
}
// function area() {
//     return Math.abs(this.x * this.y);
// };
// function vol() {
//     return Math.abs(this.x * this.y * this.z);
// };

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    )