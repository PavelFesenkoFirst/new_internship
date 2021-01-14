 // 7. Функция геттер, которая спустится по вложенности данных на основе 
//указанного строкой ключа через точку (как дойдете до задачи, напишу пример)
let someObj = {
    name: 'jjj',
    age:42,
    test: {
        some: 'ooo',
        test: '78'
    }
}

function some(obj, someParam) {
    let param = someParam.split('.');
    if(param[0] === '') param.shift();
    let value = obj;
    for(elem of param){
        value = value[elem];
    }
    return value;
}

console.log(some(someObj, 'test.some'))
