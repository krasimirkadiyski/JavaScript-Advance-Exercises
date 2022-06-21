function validate() {
    let checkBoxCompanyInfo = document.getElementById('company');
    let companyInfoField = document.getElementById('companyInfo');
    checkBoxCompanyInfo.addEventListener('change', companyInfo);
    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', validation);
    let usernameInput = document.getElementById('username');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let confirmPasswordInput = document.getElementById('confirm-password');
    let companyNumberInput = document.getElementById('companyNumber');
    let divValid = document.getElementById('valid');
    let usernamePattern = /^[\da-zA-Z]{3,20}$/;
    let passwordPattern = /^[\w]{5,15}$/;
    let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
    function validation(e) {
        e.preventDefault();
        allInputsAreValid = true;
        //username validation
        if (!usernamePattern.test(usernameInput.value)) {
            allInputsAreValid = false;
            username.style.borderColor = "red";
        } else {
            username.style.borderColor = "";
        }
        //email validation
        
        if (emailPattern.test(emailInput.value)) {
                emailInput.style.borderColor = '';
        }else{
            allInputsAreValid = false;
            emailInput.style.borderColor = 'red';
        }
        //password validation
        if (!passwordPattern.test(passwordInput.value) || passwordInput.value !== confirmPasswordInput.value) {
            allInputsAreValid = false;
            passwordInput.style.borderColor = "red";
            confirmPasswordInput.style.borderColor = "red";
        } else {
            passwordInput.style.borderColor = "";
            confirmPasswordInput.style.borderColor = "";
        }

        if (checkBoxCompanyInfo.checked) {
            //company validation
            if (companyNumberInput.value > 9999 || companyNumberInput.value < 1000) {
                allInputsAreValid = false;
                companyNumberInput.style.borderColor = "red";
            } else {
                companyNumberInput.style.borderColor = "";
            }
        }
        if (allInputsAreValid) {
            divValid.style.display = 'block'
        } else {
            divValid.style.display = 'none'

        }
    }


    function companyInfo(e) {
        if (e.currentTarget.checked) {
            companyInfoField.style.display = 'block'
        } else {
            companyInfoField.style.display = 'none'
        }
    }

}