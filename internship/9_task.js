//9. Напишите функцию, которая вернет массив с всеми элементами исходного массива,
// кроме последней ячейки
//done

const myList = [1, 2, 3, 4, 5, 6, 7];

function last_elem(list) {
  return list.slice(0, list.length - 1);
}

console.log(last_elem(myList));
