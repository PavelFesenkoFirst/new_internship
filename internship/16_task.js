// 16. Напишите функцию, которая найдет високосные года в указанном диапазоне дат
//done

function year(start_year, stop_year) {
  let year_list = [];

  for (let i = start_year; i < stop_year + 1; i++) {
    if (((i % 100 == 0) & (i % 400 == 0)) | (i % 4 == 0)) {
      year_list.push(i);
    }
  }
  return year_list;
}
console.log(year(1960, 2020));
