// 1. Напишите функцию, которая берет массив объектов и возвращает массив
//  значений определенного поля:
//done
// const chars = [
//     { 'name': 'tony', 'age': 20 },
//     { 'name': 'feel', 'age': 30 }
//   ];

// function value_chars(list, name) {
//     return list.map(value => value[name])
// }
// console.log(value_chars(chars, 'name'))




// 2. Напишите функцию неглубокого копирования массива, учитывая, 
// что исходный массив может быть произвольной длины, но не глубже массива в массиве
// done
// let my_list = [[1,2], [3,4]];

// function d_copy(list) {
//     let new_list = [];
//     for(let v of list){
//         new_list.push(v);
//     }
//     return new_list;
// }
// let my_list2 = d_copy(my_list)
// // console.log(d_copy(my_list))
// console.log(my_list)
// console.log(my_list2)
// my_list.push(['x'])
// console.log(my_list)
// console.log(my_list2)





// 3. Напишите функцию, которая принимает на входе массив и число, обозначающее размер группы,
//  на которые нужно разделить исходный массив
// done
// let my_list = [1,2,3,4,5,6,7,8,9];

// function group_separate(list, separator) {
//     let new_list = [];
//     for(let i = 0; i<list.length; i+=separator){
//         new_list.push(list.slice(i, i + separator))
//     }
//     return new_list;
// }
// 
// // function group_separate(list, separator) {
// //     let new_list = [];
// //     let help_num = list.length;
// //     for(let i = 0; i<help_num; i++){
// //         new_list.push(list.slice(i, i + separator))
// //             console.log(new_list[i])
// //     }
// //     return new_list;
// // }

// console.log(group_separate(my_list, 9))


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
// let my_list = [1,2,4,5,5,1,1,5];
// function dublicate(list) {
//     let new_dublicate = [];
//     // let second_list_duplicate = [];
//     for(let i = 0; i<list.length; i++){
//         for(let j = i + 1; j<list.length; j++){
//             if(list[i] == list[j]){
//                 new_dublicate.push(list[i])
//             }
//         }
//     }
//     let uniq_numbs = new Set(new_dublicate);
//     let back_toList = [...uniq_numbs]; 
//     return back_toList;
// }
// console.log(dublicate(my_list))

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
// done
// console.log([1, 4, 3, 0, 4, 5, 4].reduce((first, second) => (second % 2 == 0) ? first + Math.sqrt(second): first, 0))




// 13. Напишите функцию, которая вернет массив с группированными элементами исходных массивов. 
// Логика группировки: первая группа состоит из всех первых элементов исходных массивов, 
// вторая группа - из вторых элементов и т.д.
// done
// let my_list1 = [1,2];
// let my_list2 = [1,2];
// let my_list3 = [1,5];
// function some_name(list1, list2, list3) {
//     let some_lengs = list1.length;
//     let some_list = [];
//     for(let i = 0; i<some_lengs; i++){
//         some_list.push([list1[i],list2[i], list3[i]])
//     }
//     console.log(some_list);
//     // some_list[i].push(list1[i],list2[i], list3[i])
//     return some_list;
// }
// console.log(some_name(my_list1, my_list2, my_list3))


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
//         if ((v%100==0 & v%400==0) | v%4==0){
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
// done
// let my_list1 = [1, 2, 'a'];
// let my_list2 = [1, 2, 3, 4, 'b'];

// function diference(list1, list2) {
//     let obj1={};
//     let obj2={};
//     let difer=[];
//     let key;
//     for (let i=0; i < list1.length; i++) { 
//         obj1[list1[i]] = true; 
//     }
//     for (let i=0; i < list2.length; i++) {
//          obj2[list2[i]] = true;
//     }
//     for (key in obj1) { 
//         if (!(key in obj2)) { 
//             difer.push(key); 
//         } 
//     }
//     for (key in obj2) { 
//         if (!(key in obj1)) { 
//             difer.push(key); 
//         } 
//     }
//     return difer;
//   }

// console.log(diference(my_list2, my_list1))



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
// let my_list = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];

// function reiteration(list){
// 	let stack = list.reduce((a, b) => ({ ...a, [b]: (a[b] || 0) + 1 }), {})
// 	const maxValue = Math.max.apply(null, Object.values(stack))
// 	return Object.keys(stack).filter(k => stack[k] === maxValue)
// }

// console.log(reiteration(my_list));
