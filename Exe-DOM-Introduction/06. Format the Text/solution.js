function solve() {
  let outputField = document.getElementById('output');
  let inputField = document.getElementById('input').value;
  let arrOfElements = inputField.split(".");
  arrOfElements = arrOfElements.filter((x) => x.length > 0);
  let currentP = '';
  let counter = 0;
  for (let i = 0; i < arrOfElements.length; i++) {
    currentP += arrOfElements[i] + '.';
    counter++;
    if (counter == 3 || i == arrOfElements.length - 1) {
      let para = document.createElement("p");
      para.textContent = currentP;
      currentP = '';
      counter = 0;
      outputField.appendChild(para);
    }
  }
}