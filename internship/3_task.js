// 3. Напишите функцию, которая принимает на входе массив и число, обозначающее размер группы,
//  на которые нужно разделить исходный массив
//done

let my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function group_separate(list, separator) {
  return list
    .map(
      (item, index) =>
        index % separator == 0 && list.slice(index, index + separator)
    )
    .filter((item) => item);
}

console.log(group_separate(my_list, 2));
