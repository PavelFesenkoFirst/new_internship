// 1. Напишите функцию, которая берет массив объектов и возвращает массив
//  значений определенного поля:
// done
const chars = [
  { name: "tony", age: 20 },
  { name: "feel", age: 30 },
];

function value_chars(list, name) {
  return list.map((el) => el[name]);
}

console.log(value_chars(chars, "name"));

