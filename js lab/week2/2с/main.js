"use strict";


let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


function getData() {
    let height = document.getElementById("height").value;
    // document.getElementById("result").innerHTML = "Результат: " + ;
}

function piram(height) {

  for (let i=1; i <= height; i++) {
    // ctx.fillRect(100,50,8,8);
    for (let j=1; j<=i; j++){
      ctx.fillRect(100,50,8,8);
    }
  }

}
piram(height)
