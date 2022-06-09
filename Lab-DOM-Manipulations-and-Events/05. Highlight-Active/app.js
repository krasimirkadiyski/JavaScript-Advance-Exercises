function focused() {
    let allInputs = document.querySelectorAll('body div div input');
    // allInputs.forEach((i) => i.addEventListener('focus', function (e){
    //     e.target.parentNode.classList.add('focused');
    // }));
    for (const input of allInputs) {
        input.addEventListener('focus' , function(e){
            e.target.parentNode.classList.add('focused');
        })
        input.addEventListener('blur' , function(e){
            e.target.parentNode.classList.remove('focused');
        })
    }
   
}