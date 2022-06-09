function solve() {
   let textArea = document.querySelector('body  div  textarea');
   let totalPrice = 0;
   let listOfThings = [];
   let addBtn = document.getElementsByClassName('add-product');
   let arrayAddBtn = Array.from(addBtn);
   for (let i = 0; i < arrayAddBtn.length; i++) {
      arrayAddBtn[i].addEventListener('click', function one() {
         let name = document.querySelector(`body  div  div:nth-child(${i + 2}) .product-details  div`).textContent;
         let price = document.querySelector(`body  div  div:nth-child(${i + 2}) .product-line-price`).textContent;
         if (!listOfThings.includes(name)) {
            listOfThings.push(name);
         }
         let result = `Added ${name} for ${price} to the cart.\n`;
         totalPrice += Number(price);
         textArea.value += result;
      });
   }
   let checkOut = document.querySelector('body  div  button');
   checkOut.addEventListener('click', function final() {
      let finalSting = `You bought ${listOfThings.join(', ')} for ${totalPrice.toFixed(2)}.`;
      textArea.value += finalSting;
      let buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(button => button.disabled = true);
   });

}