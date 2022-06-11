function addItem() {
    let button = document.querySelector("body > article > input[type=button]:nth-child(6)");
        let selection = document.getElementById('menu');
        let textInput = document.getElementById('newItemText');
        let valueInput = document.getElementById('newItemValue');
        let textToAdd = document.createTextNode(textInput.value + valueInput.value);
        let opiton = document.createElement('option');
        opiton.appendChild(textToAdd);
        selection.appendChild(opiton);
        textInput.value = '';
        valueInput.value = '';
}