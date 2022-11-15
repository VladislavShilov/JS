function getData() {
  let day = document.getElementById("day").value;
  let temp = document.getElementById("temp").value;
  let osadki = document.getElementById("osadki").value;
  let veter = document.getElementById("veter").value;
  let vlaga = document.getElementById("vlaga").value;
  days(day, temp, osadki, veter, vlaga);
}

function days(day, temp, osadki, veter, vlaga) {
  if (day == "Воскресенье") {
    if (temp == "Тепло"){
      if (osadki == "Ясно" || osadki == "Облачно") {
        if (veter == "Нет") {
          if (vlaga == "Низкая") {
            document.getElementById("result").innerHTML = "Да" ;
          }
          else {
            document.getElementById("result").innerHTML = "Нет";
          }
        }
        else {
          document.getElementById("result").innerHTML = "Нет";
        }
      }
      else {
        document.getElementById("result").innerHTML = "Нет";
      }
    }
    else {
      document.getElementById("result").innerHTML = "Нет";
    }
  }
  else {
    document.getElementById("result").innerHTML = "Нет";
  }
}
