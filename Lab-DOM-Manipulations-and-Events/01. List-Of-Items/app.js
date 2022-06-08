function addItem() {
    let inputField = document.getElementById('newItemText');
    let li = document.createElement('li');
    li.textContent = inputField.value;
    document.getElementById('items').appendChild(li);
    inputField.value = '';

}