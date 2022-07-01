window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById('publish');


  publishBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let makeInput = document.getElementById('make');
    let modelInput = document.getElementById('model');
    let yearInput = document.getElementById('year');
    let fuelInput = document.getElementById('fuel');
    let originalCostInput = document.getElementById('original-cost');
    let sellingPriceInput = document.getElementById('selling-price');


    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;
    let fuel = fuelInput.value;
    let originalCost = Number(originalCostInput.value);
    let sellingPrice = Number(sellingPriceInput.value);
    if (make && model && year && fuel && originalCost && sellingPrice && sellingPrice > originalCost) {
      let tbody = document.getElementById('table-body');


      let tr = document.createElement('tr');
      tr.className = 'row';


      let tdMake = document.createElement('td');
      tdMake.textContent = make;
      let tdModel = document.createElement('td');
      tdModel.textContent = model;
      let tdYear = document.createElement('td');
      tdYear.textContent = year;
      let tdFuel = document.createElement('td');
      tdFuel.textContent = fuel;
      let tdOriginalCost = document.createElement('td');
      tdOriginalCost.textContent = originalCost;
      let tdSellingPrice = document.createElement('td');
      tdSellingPrice.textContent = sellingPrice;

      let tdBtn = document.createElement('td');

      let editBtn = document.createElement('button');
      editBtn.addEventListener('click', edit);
      editBtn.textContent = 'Edit';
      editBtn.className = 'action-btn edit';
      tdBtn.appendChild(editBtn);

      let sellBtn = document.createElement('button');
      sellBtn.addEventListener('click', sell);
      sellBtn.textContent = 'Sell';
      sellBtn.className = 'action-btn sell';
      tdBtn.appendChild(sellBtn);


      tr.appendChild(tdMake);
      tr.appendChild(tdModel);
      tr.appendChild(tdYear);
      tr.appendChild(tdFuel);
      tr.appendChild(tdOriginalCost);
      tr.appendChild(tdSellingPrice);
      tr.appendChild(tdBtn);

      tbody.appendChild(tr);


      makeInput.value = '';
      modelInput.value = '';
      yearInput.value = '';
      fuelInput.value = '';
      originalCostInput.value = '';
      sellingPriceInput.value = '';

      function edit(){
      makeInput.value = make;
      modelInput.value = model;
      yearInput.value = year;
      fuelInput.value = fuel;
      originalCostInput.value = originalCost;
      sellingPriceInput.value = sellingPrice;

      tr.parentElement.removeChild(tr);
      }
      function sell(e){
        let trElement = e.target.parentElement.parentElement;
        let[make,model,year,fuel,price,newPrice] = Array.from(trElement.children);
        let carUl = document.getElementById('cars-list');

        let currentCarLi = document.createElement('li');
        currentCarLi.className = 'each-list';
        let firstSpan = document.createElement('span');
        firstSpan.textContent = `${make.textContent} ${model.textContent}`;
        let secondSpan = document.createElement('span');
        secondSpan.textContent = `${year.textContent}`;
        let thirdSpan = document.createElement('span');
        let profit = Number(newPrice.textContent) - Number(price.textContent);
        thirdSpan.textContent = `${profit}`;

        currentCarLi.appendChild(firstSpan);
        currentCarLi.appendChild(secondSpan);
        currentCarLi.appendChild(thirdSpan);

        carUl.appendChild(currentCarLi);

        
       
        let profitStrong = document.getElementById('profit');
        let currentProfit = (profitStrong.textContent);
        let numberCurrentProfit = Number(currentProfit);
        let totalProfit = (numberCurrentProfit += profit).toFixed(2);
        profitStrong.textContent = totalProfit;
        trElement.parentElement.removeChild(trElement);
      }  
    }
  })

}
