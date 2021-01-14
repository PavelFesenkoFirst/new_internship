// 1. Напишите функцию, которая берет массив объектов и возвращает массив
//  значений определенного поля:
//done
// const chars = [
//   { name: "tony", age: 20 },
//   { name: "feel", age: 30 },
// ];
//
// function vlue_chars(list, name) {
//   return list.map((value) => value[name]);
// }
//
// console.log(vlue_chars(chars, "name"));

// 2. Напишите функцию неглубокого копирования массива, учитывая,
// что исходный массив может быть произвольной длины, но не глубже массива в массиве

// 3. Напишите функцию, которая принимает на входе массив и число, обозначающее размер группы,
//  на которые нужно разделить исходный массив

// 4. Напишите функцию, которая удалит из массива все "отрицательные" типы данных
// (false, null, 0, "", undefined, NaN)
// done, додумать как удалить NaN

// let my_list = [1,2,3, false, '', NaN, undefined]
// function del_negativ(list) {
//     let new_list = [];
//     for(let v of list){
//         if (v == NaN | v==null | v == 0 | v == false | v == '' | v == undefined){
//             continue
//         }else{
//             new_list.push(v)
//         }
//     }
//     return new_list
// }

// function second_negative(list) {
//     return list.filter(function (some) {
//         return !!some;
//     })
// }
// console.log(del_negativ(my_list))

//5. Напишите функцию, которая конкатенирует исходный массив с другими массивами или примитивными значениями
//done
// function concat_array(list, second_param) {
//     new_array = list.concat(second_param);
//     return new_array
// }

// 6. Напишите функцию, которая удалит указанное кол-во элементов с начала исходного массива.
//  Аргумент функции, который означает кол-во элементов, опциональный и равен 1 по умолчанию.
// Если элементов меньше, чем указанное кол-во для удаления - вернуть пустой массив
//done

// let my_list = [1,2,3,5,8,7]
// function my_slise(list, v=1) {
//     new_list = [];
//     if(v>list.length){
//         return new_list
//     }else{
//         new_list = list.slice(v)
//     }
//     return new_list
// }
// console.log(my_slise(my_list, 10))

// 7. Аналогично заданию 6, только удаление с конца массива
// done

// let my_list = [1,2,3,5,8,7]
// function my_slise(list, v=1) {
//     new_list = [];
//     if(v>list.length){
//         return new_list
//     }else{
//         new_list = list.slice(0, v)
//     }
//     return new_list
// }
// console.log(my_slise(my_list, 7))

// 8. Написать функцию, которая принимает массив, символ для замены,
// с какой ячейки начинать заменять и на какой остановиться.
// Если номера ячеек не заданы, то по умолчанию это начало и конец всего массива
// done                     !!!Переделать!!!

// let my_list = [1,2,3,4,5,6,8]
// function change_list(list, symbol, start=0, stop = list.length) {
//     let new_list = [];
//     if (start == 0){
//         for(let i = start; i < stop; i++){
//             new_list.push(symbol)
//         }
//     }else{
//         beginning = list.slice(0, start)
//         midl = list.slice(start, stop).fill(symbol)
//         end = list.slice(stop, list.length)
//         new_list = beginning.concat(midl)
//         new_list = new_list.concat(end)
//     }
//     return new_list
// }
// console.log(change_list(my_list, '*'))

//9. Напишите функцию, которая вернет массив с всеми элементами исходного массива,
// кроме последней ячейки
//done

// function last_elem(list) {
//     new_array = [];
//     for(i = 0; i<(list.length-1); i++){
//         new_array.push(list[i])
//     }
//     return new_array
// }

// function second_version(list) {
//     list.pop()
//     new_array = list
//     return new_array
// }

// 10. Напишите функцию, которая вернет массив с всеми значениями,
// которые повторяются в исходном массиве
//                                  !!!работает не так как нужно!!!
// let my_list = [1, 2, 5, 1, 4, 5, 5, 1];
// function dublicate(list) {
//   let new_list = {};
//   let new_dublicate = [];
//   for (let i = 0; i < list.length; i++) {
//     let x = list[i];
//     new_list[x] = true;
//   }
//   for (i in new_list) {
//     new_dublicate.push(i);
//   }
//   return new_dublicate;
// }

// console.log(dublicate(my_list));

// 11. Напишите функцию, которая вернет элемент из массива по указанному индексу. Но если индекс отрицательный, то считаем с конца массива
//done

// function get_elem_array(list, param) {
//     if (param > 0){
//         return list[param]
//     }else{
//         i = param*(-1)
//         list.reverse()
//         return list[i]
//     }
// }

// 12. Напишите решение в одну строчку, которое считает сумму квадратных корней
// для всех чётных чисел внутри массива

// 13. Напишите функцию, которая вернет массив с группированными элементами исходных массивов.
// Логика группировки: первая группа состоит из всех первых элементов исходных массивов,
// вторая группа - из вторых элементов и т.д.

// 14. Напишите функцию которая преобразует массив в строку через указанный разделитель
// done, но придумать свою рализыцию

// const list = [1,2,3,'ssss']
// function my_join(list, param) {
//     return list.join(param)
// }

// 15. Напишите функцию которая преобразует массив из чисел в строку через указанный разделитель, оставив только четные числа или не четные цифры, в зависимости от третьего аргумента (true - четные, false - нечетные)
//done, слишком много строк

// const my_list = [1,2,3,4,5,6,7,8,9]
// function even_and_odd(list, separator, state) {
//     new_list = [];
//     if(state == 'true'){
//         for(let v of list){
//             if (v%2 == 0){
//                 new_list.push(v)
//             }
//         }
//     }else{
//         for(let v of list){
//             if(v%2 == 1){
//                 new_list.push(v)
//             }
//         }
//     }
//     return new_list.join(separator)
// }
// console.log(even_and_odd(my_list, '^','true'))

// 16. Напишите функцию, которая найдет високосные года в указанном диапазоне дат
//done

// function year(start_year, stop_year) {
//     new_list = [];
//     year_list = [];
//     for(let i = start_year; i < (stop_year+1); i++){
//         new_list.push(i);
//     }
//     for(let v of new_list){
//         if (v%4==0 | (v%100==0 & v%400==0)){
//             year_list.push(v);
//         }
//     }
//     return year_list;
// }
// console.log(year(1960,2020))

// 17. Напишите функцию, которая перемешает массив в случайном порядке
// done

// let my_list = [1,2,3,4,5,6,7,8,9];
// function my_random(){
//     return 0.7 - Math.random();
// }
// console.log(my_list.sort(my_random));

// 18. Напишите функцию, которая вернет разницу двух массивов
// (т.е. элементы, которых нет в исходных массивах)
// let my_list1 = [1, 2, 'a'];
// let my_list2 = [1, 2, 3, 4, 'b'];
// function diference(list1, list2) {
//     let
// }

// 19. Напишите функцию, которая сортирует массив по убыванию
// done

// let my_list = [4,5,8,6,2,4,5,6,-7,9];
// function my_sort_list(list){
//     new_list = list.sort()
//     return new_list.reverse()
// }
// function my_sort_list(list) {
//     return list.sort((next, previos) => previos-next)
// }
// console.log(my_sort_list(my_list))

// 20. Напишите функцию, которая вернет самый частый элемент массива
const {} = require("../january06/array_lib");

// const chars = [
//   { name: "tony", age: 20 },
//   { name: "feel", age: 30 },
// ];

let my_list1 = [1, 2];
let my_list2 = [1, 2];
let my_list3 = [2, 5];
console.log([1, 2].element_arrays(my_list2, my_list3));
// console.log(element_arrays(my_list1, my_list2, my_list3)) 13

// console.log([7, "z", "z", "z", 3, 7, "z", 7, "z", 3, 5, 9, 7].reiteration());
// console.log([1, 2, 3, 4, 5, 6].my_join("*"));14
// console.log([1, 2, 3, 5, 6, 4, 5].get_elem_array(4)); 11
// console.log([1, 2, 5, 1, 4, 5, 5, 1, 4].dublicate()); 10
// console.log([1, 2, 3, 4, 5].change_list("*")); 8
// console.log([1, 2, 3, 4, 5, 6].my_slise(2));6
// console.log([1, 2].concat_array([5, 6])); 5
// console.log([1, "", 0, null].del_negativ()); 4
// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].group_separate(2));
// console.log(chars.value_chars('age')) 1
// console.log([1, 2, 3, 4, 5, 6].my_random()); 17
// console.log([1, 4, 2, 5].diference([1, 2, 3])); 18
