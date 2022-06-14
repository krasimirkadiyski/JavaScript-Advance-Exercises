function solution(arr) {
    let ArrOfArgs = Array.from(arguments)[0];
    let resultArr = [];
  
        for (let current of ArrOfArgs) {
            if (current == 'print') {
                console.log(resultArr.join(','));
            } else if (current.split(" ")[0] == 'add') {
                resultArr.push(current.split(" ")[1]);
            } else if (current.split(" ")[0] == 'remove') {
                resultArr = resultArr.filter((e) => e !== current.split(" ")[1]);
            }
        }
}
solution(['add pesho', 'add george', 'add peter', 'remove peter','print']);


