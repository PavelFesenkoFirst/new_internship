//4. Проверка, что строка является анаграммой другой строки
// done???
const myStr = "asssdd";
const someStr = "ddssaa";

function anagram(first, second) {
  let firstList = first.toLowerCase().split("").sort();
  let secondList = second.toLowerCase().split("").sort();
  if (firstList.length !== secondList.length) {
    console.log("Не анаграмма");
    return;
  }
  let myFlag = 0;
  for (let i = 0; i < firstList.length; i++) {
    if (firstList[i] == secondList[i]) {
      myFlag = 1;
    } else {
      myFlag = 2;
      break;
    }
  }
  if (myFlag == 2) {
    return "Не анограмма";
  } else {
    return "Анограмма";
  }
}
console.log(anagram(myStr, someStr));
