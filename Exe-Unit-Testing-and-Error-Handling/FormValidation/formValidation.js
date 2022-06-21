function validate() {
   
    let checkBoxCompany = document.getElementById('company');
    checkBoxCompany.addEventListener('change', (e) => {
        let companyInfo = document.getElementById('companyInfo');
        (e.target.checked) ? companyInfo.style.display = 'block' : companyInfo.style.display = 'none'
        
    });
   
    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', (e) => 
    {
     e.preventDefault();
        let allInputsAreValid = true;
        let usernameInput = document.getElementById('username');
        let patternUsername = /^[\da-zA-Z]{3,20}$/;
        if(patternUsername.test(usernameInput.value)){
            usernameInput.style.borderColor = '';
        }else{
            allInputsAreValid = false;
            usernameInput.style.borderColor = 'red';
        }


        // let emailInput = document.getElementById('email');
        // if (emailInput.value.includes('@') && email.value.includes('.')) {
        //     if(emailInput.value.indexOf('@') < emailInput.value.indexOf('.')){
        //         emailInput.style.borderColor = '';
        //     }
        // }else{
        //     allInputsAreValid = false;
        //     emailInput.style.borderColor = 'red';
        // }
        let emailInput = document.getElementById('email');
        let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
        if (emailPattern.test(emailInput.value)) {
                emailInput.style.borderColor = '';
        }else{
            allInputsAreValid = false;
            emailInput.style.borderColor = 'red';
        }

        let patternPassword = /^[\w]{5,15}$/;
        let passwordInput = document.getElementById('password');
        let confirmPassword = document.getElementById('confirm-password');
        if(patternPassword.test(passwordInput.value) && passwordInput.value == confirmPassword.value){
            passwordInput.style.borderColor = '';
            confirmPassword.style.borderColor = '';
        }else{
            allInputsAreValid = false;
            passwordInput.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
        }

        if(checkBoxCompany.checked){
            let companyNumer = document.getElementById('companyNumber');
            if(companyNumer.value < 1000 || companyNumer.value > 9999){
                allInputsAreValid = false;
                companyNumer.style.borderColor = 'red';
            }else{
                companyNumer.style.borderColor = '';
            }
        }
        let validDiv = document.getElementById('valid');
        if(allInputsAreValid){
            validDiv.style.display = 'block'
        }else{
            validDiv.style.display = 'none'
        }
    });

}