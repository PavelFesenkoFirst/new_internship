const {} = require('../array_lib')

describe('Тестируем файл array_lib.js ', () => {

  test('Берет массив объектов и возвращает массив значений определенного поля', () => {
    expect([{name: "tony", age: 20},{name: "feel", age: 30},].value_chars('name')).toEqual(['tony','feel']);
  });
  test('Принимаем на вход массив и число, обозначающее размер группы,\n' +
      ' на которые нужно разделить исходный массив', () => {
    expect([1,2,3,4,5,6,7,8,9].group_separate(2)).toEqual(
        [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9 ] ] );
      }
  );
  test('Удалить из массива все "отрицательные" типы данных', () =>{
    expect([1, "", 0, null, 2].del_negativ()).toStrictEqual([1, 2]);
  });
  test('Конкатенирует исходный массив с другими массивами или примитивными значениями',
      () =>{
    expect([1, 2].concat_array([5, 6])).toEqual([ 1, 2, 5, 6 ]);
      });
  test('Удалит указанное кол-во элементов с начала исходного массива.\n' +
      'Аргумент функции, который означает кол-во элементов, опциональный и равен 1 по умолчанию. \n' +
      'Если элементов меньше, чем указанное кол-во для удаления - вернуть пустой массив', () =>{
    expect([1,2,3,4,5,6].my_slise(2)).toEqual([ 3, 4, 5, 6 ]);
  });
  test('Пункция, которая принимает массив, символ для замены, \n' +
      'с какой ячейки начинать заменять и на какой остановиться. \n' +
      'Если номера ячеек не заданы, то по умолчанию это начало и конец всего массива', () =>{
    expect([1, 2, 3, 4, 5].change_list("*")).toEqual([ '*', '*', '*', '*', '*' ]);
  });
  test('Возвращаем массив со всеми значениями, которые повторяются в исходном массиве', () =>{
    expect([1, 2, 5, 1, 4, 5, 5, 1, 4].dublicate()).toEqual([ 1, 5, 4 ]);
  });
  test('Возвращаем элемент из массива по указанному индексу. ' +
      'Если индекс отрицательный, то считаем с конца массива', () => {
    expect([1, 2, 3, 5, 6, 4, 5].get_elem_array(4)).toEqual(6);
  });
  test('Возвращаем массив с группированными элементами исходных массивов.', () => {
    expect([1, 2].element_arrays([1,2], [2,5])).toEqual([ [ 1, 1, 2 ], [ 2, 2, 5 ] ]);
  });
  test('Преобразовуем массив в строку через указанный разделитель', () => {
    expect([1, 2, 3, 4, 5, 6].my_join("*")).toMatch('1*2*3*4*5*6');
  });
  test('Перемешиваем массив в случайном порядке', () => {
    expect([1, 2, 3, 4, 5, 6].my_random()).not.toEqual([ 1, 3, 6, 4, 5, 2 ]);
  });
  test('Возвращаем разницу двух массивов', () =>{
    expect([1, 4, 2, 5].diference([1, 2, 3])).toEqual([ 4, 5, 3 ]);
  });
  test('Возвращаем самый частый элемент массива', () => {
    expect([7, "z", "z", "z", 3, 7, "z", 7, "z", 3, 5, 9, 7].reiteration()).toContain('z');
  });
});
