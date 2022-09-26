"use strict";
function getYear() {
  let year = Number(document.getElementById('year').value);

  if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
    let leap = "високосный";
    return leap;
  }
  else {
    let leap = "обычный";
    return leap;
  }
}
