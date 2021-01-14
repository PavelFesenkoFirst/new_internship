// 19. Напишите функцию, которая сортирует массив по убыванию
// done

let my_list = [4, 5, 8, 6, 2, 4, 5, 6, -7, 9];

function my_sort_list(list) {
  return list.sort((next, previos) => previos - next);
}

console.log(my_sort_list(my_list));
