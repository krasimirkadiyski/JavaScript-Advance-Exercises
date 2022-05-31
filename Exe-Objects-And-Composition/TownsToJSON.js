function solve (data){
    let resultArr = [];
    for(let i = 1; i < data.length; i++){
        let splitedData = data[i].split('|');
        splitedData.shift()
        splitedData.pop();
        let Town = splitedData[0].trim();
        let Latitude = Number(Number(splitedData[1].trim()).toFixed(2))
        let Longitude = Number(Number(splitedData[2].trim()).toFixed(2))
        //[^\d.]+
        let obj = {
            Town,
            Latitude,
            Longitude,
        }
        resultArr.push(obj);

    }
    console.log(JSON.stringify(resultArr));
}
solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']

);