// 11. Напишите функцию, которая вернет элемент из массива по указанному
// индексу. Но если индекс отрицательный, то считаем с конца массива
//done

let myList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function get_elem_array(list, param) {
  return (newList = param > 0 ? list[param] : list.reverse()[param * -1]);
}

console.log(get_elem_array(myList, -7));
