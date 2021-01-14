// 14. Напишите функцию которая преобразует массив в строку через указанный разделитель
// done

const list = [1, 2, 3, "ssss"];

function my_join(list, param) {
  return list.join(param);
}

console.log(my_join(list, "<==>"));
