// 2. Сортировка массива пузырьком
// done
const myList = [1, 5, 8, 3, 7, 6, 6, 9, 2, 4];
function sort_bubble(list) {
    const someList = list;
    for(let i = someList.length - 1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(someList[j]> someList[j + 1]){
                const some = someList[j];
                someList[j] = someList[j + 1];
                someList[j + 1] = some;
            }
        }
    }
    return someList;   
}
console.log(sort_bubble(myList)) 
