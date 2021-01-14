// 15. Напишите функцию которая преобразует массив из чисел в строку через указанный разделитель, оставив только четные числа или не четные цифры, в зависимости от третьего аргумента (true - четные, false - нечетные)
//done, слишком много строк

const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function even_and_odd(arr, str, bool) {
  if (bool) {
    return arr.filter((item) => item % 2 === 0).join(str);
  }

  return arr.filter((item) => item % 2 !== 0).join(str);
}

console.log(even_and_odd(myList, "^", "false"));
