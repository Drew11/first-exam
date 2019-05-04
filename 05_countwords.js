'use script';

const text = '   You  area programmer ';
const text1 = '   You  area programmer dsfg  dfg d dfgdfgs df dfg ';

function countWords(text) {
    let count = 1;
    return  counter(text, count)
}

function counter (text, count){
    let clearStr = text.trim();

    if(clearStr.includes(' ')){
        count++;
        const index = clearStr.indexOf(' ');
        let newText = clearStr.slice(index, clearStr.length);
        return counter(newText, count);
    }
    return count;
}

const one = countWords(text);
const two =  countWords(text1);
console.log(one);
console.log(two);