// 9.Функция для конвертации короткой записи hex цвета в полную (#05а => #0055aa)
// done
function conversion(some) {
  let some_list = [];
  for (let i = 1; i < some.length; i++) {
    some_list.push(some[i].repeat(2));
  }
  let newStr = some_list.toString();
  return "#" + some_list.join("");
}
console.log(conversion("#05a"));
