// 7. Аналогично заданию 6, только удаление с конца массива
// done

// let my_list = [1, 2, 3, 5, 8, 7];

function my_slise(list, value = 1) {
  return (newList = value > list.length ? [] : list.slice(0, value));
}

Array.prototype.my_slise = function (list, value = 1) {
  return (newList = value > list.length ? [] : list.slice(0, value));
}

module.exports = my_slise;


// console.log(my_slise(my_list, 4));
