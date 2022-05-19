function circleArea(input){
    let inputType = typeof(input);
    if(inputType != 'number'){
        console.log(`We can not calculate the circle area, because we receive a ` + inputType + '.');
    }else{
        let result = (Math.PI * (input * input));
        console.log(result.toFixed(2));
    }
}

