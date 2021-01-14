//3. Проверка, что строка является палиндромом
// done
const someString = "iuytyui";

function my_polindrom(str) {
  let myFlag;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      myFlag = 1;
    } else {
      myFlag = 2;
      break;
    }
  }
  if (myFlag == 1) {
    return "yes";
  } else return "no";
}

console.log(my_polindrom(someString));
