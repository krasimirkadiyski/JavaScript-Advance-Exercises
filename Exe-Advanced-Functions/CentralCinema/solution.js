function solve() {
    //JUDGE 90/100 P.S => FIXED 100/100
    let onScreenButton = document.querySelector("#container > button");
    onScreenButton.addEventListener('click', onScreen);
    let moviesUl = document.querySelector("#movies > ul");
    let archiveUl = document.querySelector("#archive > ul");
    function onScreen(event) {
        event.preventDefault();
        let nameField = document.querySelector("#container > input[type=text]:nth-child(1)");
        let hallField = document.querySelector("#container > input[type=text]:nth-child(2)");
        let priceField = document.querySelector("#container > input[type=text]:nth-child(3)");
        let priceFieldAsNumber = Number(priceField.value);
        if (nameField.value && hallField.value && priceFieldAsNumber) {
            let li = document.createElement('li');
            let span = document.createElement('span');
            span.textContent = nameField.value;
            li.appendChild(span);
            let strongHall = document.createElement('strong');
            strongHall.textContent = `Hall: ${hallField.value}`;
            li.appendChild(strongHall);

            let div = document.createElement('div');
            let strongPrice = document.createElement('strong');
            strongPrice.textContent = `${priceFieldAsNumber.toFixed(2)}`;
            div.appendChild(strongPrice);
            let input = document.createElement('input');
            input.placeholder = 'Tickets Sold';
            div.appendChild(input);
            let buttonArchive = document.createElement('button');
            buttonArchive.textContent = 'Archive';
            buttonArchive.addEventListener('click', archive);
            div.appendChild(buttonArchive);
            li.appendChild(div);


            moviesUl.appendChild(li);

        }
        nameField.value = '';
        hallField.value = '';
        priceField.value = '';
    }
    function archive(event) {
        let clickedLi = (event.target).parentElement.parentElement;
        let ticketPrice = clickedLi.children[2].children[0];
        let movieName = clickedLi.children[0];
        let ticketsSold = clickedLi.children[2].children[1];
        if (Number(ticketsSold.value) || ticketsSold.value === '0') {
            let li = document.createElement('li');
            let spanMovieName = document.createElement('span');
            spanMovieName.textContent = movieName.textContent;
            li.appendChild(spanMovieName);
            let strongPrice = document.createElement('strong'); 
            strongPrice.textContent =  `Total amount: ${(Number(ticketPrice.textContent) * Number(ticketsSold.value)).toFixed(2)}`;
            li.appendChild(strongPrice);
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', deleteEl);
            li.appendChild(deleteButton);
            archiveUl.appendChild(li);
            clickedLi.parentElement.removeChild(clickedLi)
        }
        ticketsSold.value = '';


    }
    function deleteEl(event) {
        let clickedEl = event.target.parentElement;
        clickedEl.parentElement.removeChild(clickedEl);
    }
    let clearButton = document.querySelector("#archive > button");
    clearButton.addEventListener('click', clearAll);
    function clearAll() {
        let allArchivedLi = Array.from(archiveUl.children);
        allArchivedLi.forEach((li) => li.parentNode.removeChild(li));
    }
}

