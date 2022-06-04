function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      let searchedField = document.getElementById('searchField');
      let searchedFieldValue = searchedField.value;
      searchedField.value = '';
      let tableRows = document.querySelectorAll('table tbody tr');
      for (const row of tableRows) {
         row.classList.remove('select');
         if(row.textContent.includes(searchedFieldValue) && searchedFieldValue != ''){
            row.className = 'select';
         }
      }
   }
}