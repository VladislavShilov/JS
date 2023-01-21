function dataSeparation_func() {

  document.getElementById("btn").onclick = function() {
    const string_const = document.getElementById('string_const').value;
    document.getElementById("string_const").value = "";

    const window_const = document.getElementById('window_const').value;
    document.getElementById("window_const").value = "";

    const stringSplit = (str) => str.split(['@']);

    const bubbleSort = (coll) => { // сортировка пузырьком
      let stepsCount = coll.length - 1;
      let swapped;
      do {
        swapped = false;
        for (let i = 0; i < stepsCount; i += 1) {
          if (coll[i] > coll[i + 1]) {
            const temp = coll[i];
            coll[i] = coll[i + 1];
            coll[i + 1] = temp;
            swapped = true;
          }
        }
        stepsCount -= 1;
      } while (swapped);
      return coll;
    };

    const dataSort = (string_const, window_const) => { // функция разделения полученных данных и их вывода после сортировки
      let dataArr = stringSplit(string_const);

      if (window_const == '1') {
        let arrForMethod1 = [];

        for (let i = 0; i < dataArr.length; i++) { // создаем массив с данными id датчиков
          arrForMethod1.push(dataArr[i].substr(0, 2));
        }

        let arrForMethod1_Sort = bubbleSort(arrForMethod1); // теперь в данном массиве находятся отсортированные id датчиков
        let j = 0;

        while (j < dataArr.length) { // сравниваем значения из сорт массива со значениями из изначального массива
          for (let i = 0; i < dataArr.length; i++) {
            if (arrForMethod1_Sort[j] == dataArr[i].substr(0, 2)) { // сравниваем id датчика из сорт массива и id из изначального массива
              arrForMethod1_Sort[j] += dataArr[i].substr(2); // если сошлись то добавляем в массив сорт значение температуры
              break // заканчиваем сравнивать
            }
          }
          j += 1; // переходим к следующему id для дальнейшего сравнения
        }

        for (let i = 0; i < arrForMethod1_Sort.length; i++) { // вывод значений датчиков отсортированных по значениям id
          console.log(arrForMethod1_Sort[i].substr(0, 2) + ` ` + arrForMethod1_Sort[i].substr(2) + `.0`);
        }

      } else if (window_const == '2') {
        let arrForMethod2 = [];

        for (let i = 0; i < dataArr.length; i++) { // создаем массив с данными температур
          arrForMethod2.push(Number(dataArr[i].substr(2)));
        }

        let arrForMethod2_Sort = bubbleSort(arrForMethod2); // теперь в данном массиве находятся отсортированные температуры
        let j = 0;

        for (let i = 0; i < arrForMethod2_Sort.length; i++) { // меняем тип данных на string для дальнейшей обработки
          arrForMethod2_Sort[i] = String(arrForMethod2_Sort[i]);
        }

        while (j < dataArr.length) { // сравниваем значения из сорт массива со значениями из изначального массива
          for (let i = 0; i < dataArr.length; i++) {
            // сравниваем температуру и id из сорт массива и из изначального массива
            if (arrForMethod2_Sort[j] == dataArr[i].substr(2)) {
              arrForMethod2_Sort[j] = dataArr[i]; // если сошлись то добавляем в массив сорт значение температуры
              break // заканчиваем сравнивать
            }
          }
          j += 1; // переходим к следующему значению для дальнейшего сравнения
        }

        for (let i = 0; i < arrForMethod2_Sort.length; i++) { // вывод значений датчиков отсортированных по значениям id
          console.log(arrForMethod2_Sort[i].substr(0, 2) + ` ` + arrForMethod2_Sort[i].substr(2) + `.0`);
        }

      } else {
        console.log('Выбран несуществующий метод сортировки!')
      }

    }

    console.clear();
    dataSort(string_const, window_const);

  }

}
