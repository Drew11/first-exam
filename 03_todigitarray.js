'use script';

function toDigitArray(number) {
 const str =  number.toString();
 const arr = str.split('');
 const res = arr.map((current)=>Number(current));

 return res.reverse();
}

console.log(toDigitArray(46156));

//  * e.g. for N = 46156 it should return [6, 5, 1, 6, 4]. Make sure all items
//
//
//  * in returned arrays are numbers. ['6', '5', '1', '6', '4'] is wrong answer.