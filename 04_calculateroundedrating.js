'use strict';

//
//
// * calculateRoundedRating(3.666); // 3.5
//
//
// * calculateRoundedRating(1.92); // 2
//
//
// * calculateRoundedRating(4.25); // 4.5
//
//
// * calculateRoundedRating(1.2499999); // 1
//
//
// *



    function calculateRoundedRating(rating) {

        const str =  rating.toString();
        const index = str.indexOf('.');
        const clearStr = str.slice(index, str.length);
        const clearStrAfterPoint = str.slice(index+1, str.length);
        const numberAfterPoint = parseFloat(clearStr);

        let res;

        if(numberAfterPoint>0.5 && clearStrAfterPoint.length<3){
            res = Math.round(rating)
        }
        if(numberAfterPoint<0.5 && clearStrAfterPoint.length<3){
            const ceil =  Math.trunc(rating);
            res = ceil + 0.5;
        }
        if(numberAfterPoint > 0.5 && clearStrAfterPoint.length<4){
            const ceil =  Math.trunc(rating);
            res = ceil + 0.5;
        }

        if(numberAfterPoint<0.5 && clearStrAfterPoint.length>4){
            res = Math.floor(rating)
        }

        return res;

        // switch (true) {
        //
        //
        //    case numberTarget > floatNum:
        //          if(clearStr.length<3){
        //              res = Math.round(rating)
        //          }
        //          if(clearStr.length<6){
        //
        //              res = ceil + numberTarget;
        //          }
        //          break;
        //
        //    case numberTarget < floatNum:
        //         if(clearStr.length<5){
        //             res = Math.round(rating)
        //         }else {
        //             ceil =  Math.trunc(rating);
        //             res = ceil+ numberTarget;
        //         }



        }

console.log(calculateRoundedRating(3.666));
console.log(calculateRoundedRating(1.92));
console.log(calculateRoundedRating(4.45));
console.log(calculateRoundedRating(1.2499999));
