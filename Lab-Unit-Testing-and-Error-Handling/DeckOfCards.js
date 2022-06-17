function createCardObj(arr) {
    let invalidCard = '';
    let flagError = false;
    let suitsObj = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };
    let suitsArr = Object.keys(suitsObj);
    let facesArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let resultArr = [];
    for (const card of arr) {
        let face = card.slice(0,card.length - 1);
        let suit = card.slice(card.length - 1, card.length);
        if (!suitsArr.includes(suit) || !facesArr.includes(face)) {
            invalidCard = (`Invalid card: ${card}`);
            flagError = true;
            break;
        }else{
            let obj = {
                face,
                suit,
                toString: () => {
                    return `${face}${suitsObj[suit]}`
                }
            }
            resultArr.push(obj.toString());
        }
    }
    if(!flagError){
    console.log(resultArr.join(" "));
    }else{
    console.log(invalidCard);
    }
}
(createCardObj(['AS', '10D', 'KH', '2C']));