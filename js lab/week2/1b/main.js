
function getData() {
  let year = document.getElementById("year").value;
  let month = document.getElementById("month").value;
  month = parseInt(month);
  days(month,year);
}

function days(month, year) {
    switch(month){
        case 1:
            document.getElementById("result").innerHTML = "В январе " + year + " года 31 день.";
            break;

        case 2:
            if (year %4 == 0 && year % 100 !=0 || year % 400 == 0){
                document.getElementById("result").innerHTML = "В феврале " + year + " года 29 дней.";
            }
            else {
                document.getElementById("result").innerHTML = "В феврале " + year + " года 28 дней.";
            }
            break;

        case 3:
            document.getElementById("result").innerHTML = "В марте " + year + " года 31 день.";
            break;

        case 4:
            document.getElementById("result").innerHTML = "В апреле " + year + " года 30 дней.";
            break;

        case 5:
            document.getElementById("result").innerHTML = "В мае " + year + " года 31 день.";
            break;

        case 6:
            document.getElementById("result").innerHTML = "В июне " + year + " года 30 дней.";
            break;

        case 7:
            document.getElementById("result").innerHTML = "В июле " + year + " года 31 день.";
            break;

        case 8:
            document.getElementById("result").innerHTML = "В августе " + year + " года 31 день.";
            break;

        case 9:
            document.getElementById("result").innerHTML = "В сентябре " + year + " года 30 дней.";
            break;

        case 10:
            document.getElementById("result").innerHTML = "В октябре " + year + " года 31 день.";
            break;

        case 11:
            document.getElementById("result").innerHTML = "В ноябре " + year + " года 30 дней.";
            break;

        case 12:
            document.getElementById("result").innerHTML = "В декабре " + year + " года 31 день.";
            break;
}
}
