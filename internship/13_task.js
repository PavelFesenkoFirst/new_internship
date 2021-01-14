// 13. Напишите функцию, которая вернет массив с группированными элементами исходных массивов.
// Логика группировки: первая группа состоит из всех первых элементов исходных массивов,
// вторая группа - из вторых элементов и т.д.
//done

let my_list1 = [1, 2];
let my_list2 = [1, 2];
let my_list3 = [1, 5];
// let myList = [2, 5];

function some_name(list1, list2, list3) {
  let some_list = [];

  for (let i = 0; i < list1.length; i++) {
    some_list.push([list1[i], list2[i], list3[i]]);
  }

  return some_list;
}

console.log(some_name(my_list1, my_list2, my_list3, myList));
