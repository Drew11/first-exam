'use strict';

function countOccurrences(str, substr) {
    let count = 0;
    return counter(str, substr, count);

}
function counter (str, substr, count){
    let newStr;
    while (str.includes(substr)){
        count++;
        const index = str.indexOf(substr);
        newStr = str.slice(index+substr.length, str.length);
        str = newStr;
    }

    return count;
}

console.log(countOccurrences('afghbabagalamaga', 'ba'));
console.log(countOccurrences('azyxxzyzy', 'zy'));
console.log(countOccurrences('sasavbdxsasasasasasa', 'sa'));