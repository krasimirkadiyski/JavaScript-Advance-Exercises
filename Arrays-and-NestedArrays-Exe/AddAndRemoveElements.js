function solve(arr){
    let counter = 0;
    let resultArr = [];
    while(counter < arr.length){
        if(arr[counter] == 'add'){
            resultArr.push(counter + 1);
        }else{
            resultArr.pop();
        }
        counter++;
    }
    if(resultArr.length == 0){
        console.log('Empty');
    }else{
    for (let i = 0; i < resultArr.length; i++) {
        console.log(resultArr[i]);
    }
}
    
}
