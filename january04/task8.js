// 8.Генерация случайного hex цвета
// done
function some_colore() {
    let color = Math.floor(Math.random() * Math.pow(10,6)).toString();
    return '#' + color;
}
console.log(some_colore()) 
