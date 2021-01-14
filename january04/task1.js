// 1. Дедупликация массива
// done
const myList = [1,1,2,6,4,5,4,4,8,9,5,7,7,3,6,6,9];
function deduplication(list) {
    let someSet = new Set(list);
    let someList = [];
    someSet.forEach(v => someList.push(v))
    return someList;    
}
console.log(deduplication(myList)) 
