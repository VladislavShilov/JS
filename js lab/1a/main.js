function stringSearch_func() {

  document.getElementById("btn").onclick = function() {
    const string_const = document.getElementById('string_const').value;
    document.getElementById("string_const").value = "";

    const unit_const = document.getElementById('unit_const').value;
    document.getElementById("unit_const").value = "";

    const stringSplit = (str) => str.split([ ]);

    let countUnitInString = 0;

    let arrString = stringSplit(string_const);
    let arrUnit = stringSplit(unit_const);

    console.log(arrString);
    console.log(arrUnit);

    for (let i = 0; i < (arrString.length - arrUnit.length + 1); i++) {

      for (let j = 0; j < arrUnit.length; j++) {

        if (arrString[i + j] == arrUnit[j]) {

          if (j == arrUnit.length - 1) {
            countUnitInString += 1;
          }

        } else {
          break
        }

      }

    }

    console.log(countUnitInString);

  }

}
