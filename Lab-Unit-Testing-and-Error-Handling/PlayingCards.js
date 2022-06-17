function createCardObj(face, suit) {
    let suitsObj = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };
    let suitsArr = Object.keys(suitsObj);
    let facesArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    if (!suitsArr.includes(suit) || !facesArr.includes(face)) {
        throw new Error('Error');
    }
    let obj = {
        face,
        suit,
        toString: () => {
            return `${face}${suitsObj[suit]}`
        }
    }
    return obj.toString();
}
console.log(createCardObj('1', 'C'));
