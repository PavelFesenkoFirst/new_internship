// 5. Поиск гласных в строке
// done
const someStr = 'iuadsfidjedooee';
function search_vowel(str) {
    let someVowel = ['a', 'e', 'y', 'u', 'i', 'o'];
    let count = 0;
    for(let v of str){
        if(someVowel.includes(v)){
            count += 1;
        }
    }
    return count
}
console.log(search_vowel(someStr)) 
