// 18. Напишите функцию, которая вернет разницу двух массивов
// (т.е. элементы, которых нет в исходных массивах)
// done
let myList1 = [1, 2, "a", 7];
let myList2 = [2, 3, 4, "b"];

function diference(list1, list2) {
  return list1
    .filter((value) => list2.indexOf(value) == -1)
    .concat(list2.filter((value) => list1.indexOf(value) == -1));
}

console.log(diference(myList1, myList2));
