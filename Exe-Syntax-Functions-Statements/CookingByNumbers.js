function solve(num, a, b, c, d, e) {
    let number = Number(num);
    let ArrOfCommands = [a, b, c, d, e];
    for (i = 0; i < ArrOfCommands.length; i++) {
        let currentCommand = ArrOfCommands[i];
        switch (currentCommand) {
            case "chop":
                number = number / 2;
                console.log(number);
                break;
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;
            case "spice":
                number++;
                console.log(number);
                break;
            case "bake":
                number *= 3;
                console.log(number);
                break;
            case "fillet":
                number = number - (number * 0.2);
                console.log(number);
                break;
        }
    }

}
