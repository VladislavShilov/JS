"use strict";

function myFunction() {
  let age = document.getElementById('age').value;

  if (((age % 100)>=11) && ((age % 100)<=14)) {
    document.getElementById("txt").innerHTML ="Вам " + age + " лет";
  }
  else if (age % 10 == 1) {
    document.getElementById("txt").innerHTML ="Вам " + age + " год";
  }
  else if ((age % 10 == 2) || (age % 10 == 3) || (age % 10 == 4)){
    document.getElementById("txt").innerHTML ="Вам " + age + " года";
  }
  else {
    document.getElementById("txt").innerHTML ="Вам " + age + " лет";
  }
}
