function search() {
   let townsUl = document.querySelectorAll('ul li');
   let arrOfLi = Array.from(townsUl);
   //set each li style to normal
   arrOfLi.forEach((e) => {e.style.fontWeight = 'normal'; e.style.textDecoration = 'none';});
   let inputFieldSearch = document.getElementById('searchText');
   let button = document.querySelector('body  article  button');
   let resultField = document.getElementById('result');
   let inputFieldSearchValue = inputFieldSearch.value;
   //set search field to ''
   inputFieldSearch.value = '';
   //filter arr by searched field
   arrOfLi = arrOfLi.filter((e) => e.textContent.includes(inputFieldSearchValue));
   resultField.textContent = `${arrOfLi.length} matches found`
   arrOfLi.forEach((e) => {e.style.fontWeight = 'bold'; e.style.textDecoration = 'underline';});
  
}
