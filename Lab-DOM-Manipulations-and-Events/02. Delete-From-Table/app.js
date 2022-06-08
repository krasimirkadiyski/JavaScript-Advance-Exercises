function deleteByEmail() {
    let allTableRows = document.querySelectorAll('table tbody tr');
    let searchedEmail = document.querySelector('body > label > input[type=text]');
    let resultField = document.getElementById('result');
    for (const row of allTableRows) {
        let email = row.children[1];
        if(email.textContent == searchedEmail.value){
            row.parentNode.removeChild(row);
            resultField.textContent = 'Deleted.'
        }
    }
    if(resultField.textContent == ''){
        resultField.textContent = 'Not found.'
    };
}