function validate() {
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    let inputField = document.getElementById('email');
    inputField.addEventListener('change', validate);
    function validate(){
        let currentEmail = inputField.value;
        if(!pattern.test(currentEmail)){
            inputField.classList.add('error');
        }else{
            inputField.classList.remove('error');
        }
    }
}