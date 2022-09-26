"use strict";

function myFunction() {
  let length = document.getElementById('length').value;
  let result = (5/12*(3+5**(1/2))*length**3);
  result = result.toFixed(3);
  document.getElementById("wrote").innerHTML = "Объем икосаэдра равен " + result;
}
