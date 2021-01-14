// 20. Напишите функцию, которая вернет самый частый элемент массива
// done
let my_list = [7, "z", "z", "z", 3, 7, "z", 7, "z", 3, 5, 9, 7];

function reiteration(list) {

  return list
    .sort(
      (a, b) =>
          list.filter((v) => v === a).length -
          list.filter((v) => v === b).length
    )
    .pop();
}

console.log(reiteration(my_list));
