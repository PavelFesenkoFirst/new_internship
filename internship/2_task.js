// 2. Напишите функцию неглубокого копирования массива, учитывая,
// что исходный массив может быть произвольной длины, но не глубже массива в массиве
let my_list = [
  [1, 2],
  [3, 4],
];

function d_copy(list) {
  return list.slice();
}

let my_list2 = d_copy(my_list);

console.log(my_list);
console.log(my_list2);
my_list.push(["x"]);
console.log(my_list);
console.log(my_list2);
