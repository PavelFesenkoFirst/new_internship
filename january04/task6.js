 //6. Определения числа Фибоначи
// done
function fibonachi(numb) {
    let firstNumb = 0;
    let secondNumb = 1;
    for(let i = 2; i<=numb; i++){
        let resulte = firstNumb + secondNumb;
        firstNumb = secondNumb;
        secondNumb = resulte;
    }
    return secondNumb
}
console.log(fibonachi(10))
