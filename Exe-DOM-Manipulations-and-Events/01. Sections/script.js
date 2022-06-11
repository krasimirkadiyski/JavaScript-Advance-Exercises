function create(words) {
   let mainDiv = document.getElementById('content');
   for (const currentWord of words) {
      let currentDiv = document.createElement('div');
      let currentP = document.createElement('p');
      currentP.style.display = 'none'
      currentP.textContent = currentWord;
      currentDiv.appendChild(currentP);
      currentDiv.addEventListener('click',show);
      mainDiv.appendChild(currentDiv);
      function show(event){
         console.log(event.target.firstChild.style.display = 'block');
   }
}
}