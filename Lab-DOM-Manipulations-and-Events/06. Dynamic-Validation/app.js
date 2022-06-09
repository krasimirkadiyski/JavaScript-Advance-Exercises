function validate() {
 let emailInput = document.getElementById('email');
 emailInput.addEventListener('change', function(e){
     let inputValue = e.target.value;
     let regex = /(\b[a-z]+@[a-z]+\.[a-z]+\b)/g;
     let found = inputValue.match(regex);
     if(found == null){
        e.target.classList.add('error');
    }else{
        e.target.classList.remove('error');
    }
 });
}