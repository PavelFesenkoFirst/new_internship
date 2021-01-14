// 17. Напишите функцию, которая перемешает массив в случайном порядке
// done

let my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function my_random() {
  return 0.7 - Math.random();
}

console.log(my_list.sort(my_random));
