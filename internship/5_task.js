//5. Напишите функцию, которая конкатенирует исходный массив с другими массивами или примитивными значениями
//done

const myArr = [1, 2, 34];
const mySecond = [4, 5, 6, [1, 2]];

function concat_array(...param) {
  // return list.concat(second_param);
  return param.reduce((acc, item) => acc.concat(item), []);
}

console.log(concat_array(myArr, mySecond));
console.log(myArr);
console.log(mySecond);
