function addItem() {
    let inputField = document.getElementById('newItemText');
    let items = document.getElementById('items');
    let li = document.createElement('li');
    let aElement = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');
    li.textContent = inputField.value;
    aElement.appendChild(linkText);
    aElement.href = '#';
    aElement.addEventListener('click', function(e){console.log(e.target.parentNode.remove(e.target))});
    li.appendChild(aElement);
    items.appendChild(li);
    inputField.value = '';
    
}