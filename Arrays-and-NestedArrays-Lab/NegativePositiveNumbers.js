function solve(arr){
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] >= 0){
           result.push(arr[index]);
        }else{
            result.unshift(arr[index]);
        }
     }
     return result;
}


