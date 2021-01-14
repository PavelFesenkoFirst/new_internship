// 8. Написать функцию, которая принимает массив, символ для замены,
// с какой ячейки начинать заменять и на какой остановиться.
// Если номера ячеек не заданы, то по умолчанию это начало и конец всего массива
// done                     !!!Переделать!!!

let myList = [1, 2, 3, 4, 5, 6, 8];

function change_list(list, symb, start = 0, stop = list.length) {
  for (let i = start; i < stop; i++) {
    list[i] = symb;
  }
}

change_list(myList, "-");
console.log(myList);
