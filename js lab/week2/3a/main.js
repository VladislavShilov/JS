"use strict";

function getData() {
    let inpArr = document.getElementById("inpArr").value.split(',');
    document.getElementById("result").innerHTML = "Результат: "+ searchMax(inpArr);
}

function searchMax(inpArr) {
    let max = inpArr[0];
    let count = 0;
    for (let i = 0; i < inpArr.length; i++) {
    if (max < inpArr[i]) {
        max = inpArr[i];
    }
    }
    for (let j = 0; j < inpArr.length; j++) {
        if (max == inpArr[j]) {
            count++
        }
    }
    console.log(max);
    return count;
}
