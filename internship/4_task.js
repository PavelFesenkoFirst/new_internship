// 4. Напишите функцию, которая удалит из массива все "отрицательные" типы данных
// (false, null, 0, "", undefined, NaN)
// done, додумать как удалить NaN

let my_list = [1, 2, 3, false, "", NaN, undefined];

function del_negativ(list) {
  return list.filter(function (some) {
    return !!some;
  });
}

console.log(del_negativ(my_list));
