function squareOfStars(size){
    let result = '';
        for (let index = 1; index <= size; index++) {
            result = result + '* ';
        }
        result.trim;
        for (let index = 1; index <= size; index++) {
            console.log(result);
        }
}
squareOfStars(0);