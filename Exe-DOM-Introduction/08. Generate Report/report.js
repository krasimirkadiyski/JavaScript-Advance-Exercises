function generateReport() {
    
    let arrCheckBoxes= Array.from(document.querySelectorAll('table thead tr th input[type=checkbox]'));
    arrCheckBoxesNames = arrCheckBoxes.map((e) => e.name);
    let allRows = Array.from(document.querySelectorAll(`table tbody tr`));
    let resultArrReport = [];
    for(let row = 0; row < allRows.length; row++){
        let cols = allRows[row].children;
        let obj = {};
        for(let col = 0; col < cols.length; col++){
            if(arrCheckBoxes[col].checked){
                obj[arrCheckBoxesNames[col]] = cols[col].textContent;
            }
        }
        resultArrReport.push(obj);
    }


    let textReport = JSON.stringify(resultArrReport);
    let outputTextArea = document.getElementById('output');
    outputTextArea.value = textReport;
}