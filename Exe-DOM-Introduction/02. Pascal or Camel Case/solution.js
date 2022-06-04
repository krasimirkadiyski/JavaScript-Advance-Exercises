function solve() {
  let inputField = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let resultField = document.getElementById('result');
  let resultText = '';
  let arrToEdit = inputField.split(" ");
  
  
  
  if(convention === 'Pascal Case'){
    for (const word of arrToEdit) {
       resultText += word[0].toUpperCase();
       let restOfWord = word.slice(1).toLowerCase();
       resultText += restOfWord;
    }
    resultField.textContent = resultText;
  }else if(convention === 'Camel Case'){
      resultText += (arrToEdit[0].toLowerCase());
      for(let i = 1; i < arrToEdit.length; i++){
        let word = arrToEdit[i];
        resultText += word[0].toUpperCase();
        let restOfWord = word.slice(1).toLowerCase();
        resultText += restOfWord;
        resultField.textContent = resultText;
      }
  }else{
    resultField.textContent = 'Error!'
  }
  
}