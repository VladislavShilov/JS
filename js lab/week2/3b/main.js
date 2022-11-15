"use strict";

function getData() {
    let inpArr = document.getElementById("inpArr").value.split(',');
    document.getElementById("result").innerHTML = "Результат: "+ searchMedian(convertAndSortArr(inpArr));
}

function convertAndSortArr(inpArr) {
    for (let i=0; i < inpArr.length; i++) {
        inpArr[i] = parseInt(inpArr[i]);
    }
  return inpArr.sort((a, b) => a - b);
}

function searchMedian(inpArr) {
  let median;
  if (inpArr.length % 2 == 0) {
    median =(inpArr[inpArr.length / 2] + inpArr[inpArr.length / 2 - 1])/2;
  }
  else {
    median = inpArr[(inpArr.length - 1) / 2];

  }
  return median;
}
