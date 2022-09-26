"use strict";


function getMonth() {
  let month = Number(document.getElementById('month').value);
  let getYear();
  if  leap == "високосный" {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return ("В этом году в "+ month +" месяце 31 день");
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        return ("В этом году в "+ month +" месяце 30 дней");
        break;
      case 2:
        return ("В этом году во "+ month +" месяце 29 дней");
        break;
    }
  }
  else { //обычный
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return ("В этом году в "+ month +" месяце 31 день");
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        return ("В этом году в "+ month +" месяце 30 дней");
        break;
      case 2:
          return ("В этом году во "+ month +" месяце 28 дней");
          break;
    }
  }
}
