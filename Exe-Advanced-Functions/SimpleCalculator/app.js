function calculator() {
        let el1;
        let el2;
        let resultEl;
        let obj  = {
            init: (selector1,selector2,result) => {
                 el1 = document.querySelector(selector1);
                 el2 = document.querySelector(selector2);
                 resultEl = document.querySelector(result);
            },
            add: () => {
                let el1Value = Number(el1.value);
                let el2Value = Number(el2.value);
                resultEl.value = el1Value + el2Value;
            },
            subtract : () => {
                let el1Value = Number(el1.value);
                let el2Value = Number(el2.value);
                resultEl.value = el1Value - el2Value;
            }
    
            
        
    }
    return obj;
}
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 
calculate.add();





