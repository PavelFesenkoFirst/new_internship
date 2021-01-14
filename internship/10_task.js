// 10. Напишите функцию, которая вернет массив с всеми значениями,
// которые повторяются в исходном массиве
//
let my_list = [1, 2, 4, 5, 5, 1, 1, 5];

function dublicate(list) {
  return list.filter(
    (element, index, arr) =>
      arr.indexOf(element) === index && arr.lastIndexOf(element) !== index
  );
}

console.log(dublicate(my_list));
