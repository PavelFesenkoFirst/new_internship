// 1. Дедупликация массива
// done
// const myList = [1,1,2,6,4,5,4,4,8,9,5,7,7,3,6,6,9];
// function deduplication(list) {
//     let someSet = new Set(list);
//     let someList = [];
//     someSet.forEach(v => someList.push(v))
//     return someList;
// }
// console.log(deduplication(myList))

// 2. Сортировка массива пузырьком
// done
// const myList = [1, 5, 8, 3, 7, 6, 6, 9, 2, 4];
// function sort_bubble(list) {
//     const someList = list;
//     for(let i = someList.length - 1; i > 0; i--){
//         for(let j = 0; j < i; j++){
//             if(someList[j]> someList[j + 1]){
//                 const some = someList[j];
//                 someList[j] = someList[j + 1];
//                 someList[j + 1] = some;
//             }
//         }
//     }
//     return someList;
// }
// console.log(sort_bubble(myList))

//3. Проверка, что строка является палиндромом
// done
// const someString = "iuytyui";
// function my_polindrom(str) {
//   let myFlag;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[str.length - 1 - i]) {
//       myFlag = 1;
//     } else {
//       myFlag = 2;
//       break;
//     }
//   }
//   if (myFlag == 1) {
//     return "yes";
//   } else return "no";
// }
// console.log(my_polindrom(someString));

//4. Проверка, что строка является анаграммой другой строки
// done
// function anagrama(firstStr, secondStr) {
//     if(firstStr === secondStr){
//         return 'no'
//     }else{
//         return 'yes'
//     }
// }

// let str1 = "aassdd";
// let str2 = "ddssqq";

// function anagram(first, second) {
//   let firstList = first.toLowerCase().split("").sort();
//   let secondList = second.toLowerCase().split("").sort();
//   if (firstList.length !== secondList.length) {
//     console.log("Не анаграмма");
//     return;
//   }
//   for (let i = 0; i < firstList.length; i++) {
//     console.log(firstList);
//     console.log(secondList);
//     if (firstList[i] == secondList[i]) {
//       return "Aнограмма";
//     } else {
//       return "Не анограмма";
//     }
//   }
// }
// console.log(anagram(str1, str2));

// console.log(anagrama(myStr,someStr))

// 5. Поиск гласных в строке
// done
// const someStr = 'iuadsfidjedooee';
// function search_vowel(str) {
//     let someVowel = ['a', 'e', 'y', 'u', 'i', 'o'];
//     let count = 0;
//     for(let v of str){
//         if(someVowel.includes(v)){
//             count += 1;
//         }
//     }
//     return count
// }
// console.log(search_vowel(someStr))

//6. Определения числа Фибоначи
// done
// function fibonachi(numb) {
//     let firstNumb = 0;
//     let secondNumb = 1;
//     for(let i = 2; i<=numb; i++){
//         let resulte = firstNumb + secondNumb;
//         firstNumb = secondNumb;
//         secondNumb = resulte;
//     }
//     return secondNumb
// }
// console.log(fibonachi(7))

// 7. Функция геттер, которая спустится по вложенности данных на основе
//указанного строкой ключа через точку (как дойдете до задачи, напишу пример)
// let someObj = {
//     name: 'jjj',
//     age:42,
//     test: {
//         some: 'ooo',
//         test: '78'
//     }
// }

// function some(obj, someParam) {
//     let param = someParam.split('.');
//     if(param[0] === '') param.shift();
//     let value = obj;
//     for(elem of param){
//         value = value[elem];
//     }
//     return value;
// }

// console.log(some(someObj, 'test.test'))

// 8.Генерация случайного hex цвета
// done
// function some_colore() {
//     let color = Math.floor(Math.random() * Math.pow(10,6)).toString();
//     return '#' + color;
// }
// console.log(some_colore())

// 9.Функция для конвертации короткой записи hex цвета в полную (#05а => #0055aa)
// done
function conversion(some) {
  let some_list = [];
  for (let i = 1; i < some.length; i++) {
    some_list.push(some[i].repeat(2));
  }
  //   console.log(some_list);
  let newStr = some_list.toString();
  //   return "#" + some_list.join("");
  return "#" + newStr.replace(/[\s.,%]/g, "");
}
console.log(conversion("#05a"));
