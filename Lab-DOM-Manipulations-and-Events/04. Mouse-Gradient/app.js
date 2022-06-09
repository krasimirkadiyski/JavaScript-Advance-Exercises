function attachGradientEvents() {
   let gradient = document.getElementById('gradient');
   gradient.addEventListener('mousemove', gradientMove);
   gradient.addEventListener('mouseout', gradientOut);
   let resultField = document.getElementById('result');
   function gradientMove(event) {
    let power = event.offsetX / (event.target.clientWidth - 1);
    power = Math.floor(power * 100);
    resultField.textContent = power + "%";
  };
  function gradientOut(event) {
    resultField.textContent = "";
  };
}
