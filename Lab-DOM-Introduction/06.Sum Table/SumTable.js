function sumTable() {
    let allElements = document.querySelectorAll("tbody td:nth-child(2)");
    let sum = 0;
    for(let i = 0; i < allElements.length - 1; i++){

        sum += Number(allElements[i].textContent);
    }
    let sumField = document.querySelector("tbody tr:nth-child(5) td:nth-child(2)");
    sumField.textContent = sum;

}