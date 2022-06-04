function toggle() {
    let hiddenDiv = document.getElementById("extra");
    let buttonEl = document.getElementsByClassName("button")[0];
    if(buttonEl.textContent == 'More'){
    hiddenDiv.style = 'display: block';
    buttonEl.textContent = 'Less';
    }else{
        buttonEl.textContent = 'More';
        hiddenDiv.style = 'display: none';
    }
}