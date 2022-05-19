function solve(lenght, k) {
    if(lenght == 1 || lenght == 0){
        return [1];
    }else if(lenght == 2){
        return [1,1];
    }
    let arr = [1, 1, 2];
    while (arr.length < lenght) {
        let coppiedArr;
        if (k > arr.length) {
            coppiedArr = arr.slice();
        } else {
            coppiedArr = arr.slice(arr.length - k, arr.length);
        }
        let nextDigit = coppiedArr.reduce((acc, num) => {
            return acc + num;
        }, 0);
        arr.push(nextDigit);
    }
    return arr;
}


