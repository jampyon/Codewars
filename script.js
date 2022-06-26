//8 Kyu - Multiply
// function multiply(a, b){
//     const multiplication = a * b;
//     return multiplication;
//   }
//   multiply(1, 1);
////////////////////////////////////////////////////////////////////////////////////////////

//8 Kyu - Are You Playing Banjo? (Completed 6.25.22)
// const areYouPlayingBanjo = function (name) {
//     const banjoStatus = (name.startsWith("R") || name.startsWith("r")) ? `${name} plays banjo` : `${name} does not play banjo`;
//     return banjoStatus;
//   };
// NOTES: Two issues: .startsWith method needs to separate. Putting ("r", "R") doesn't work because "R" is normally for a specific position that the method checks for. Think arrayName[3] or something. Second issue was function returned undefined when called. I needed to assign the conditional op to a var and then return it.
////////////////////////////////////////////////////////////////////////////////////////////

//8 Kyu - SumArrays (Completed 6.25.22)
// function sum (numbers) {
//     "use strict";
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     };
//     return sum;
// };
////////////////////////////////////////////////////////////////////////////////////////////

//8 Kyu - Convert a number to a string (Completed 6.26.22)
// function numberToString(num) {
//     const conversionNumToString = String(num);
//     return conversionNumToString
//   };
////////////////////////////////////////////////////////////////////////////////////////////

//8 Kyu - Remove First and Last Character (Completed 6.26.22)
// function removeChar(str){
//     let newStr = str.slice(1, str.length - 1);
//     return newStr;
// };
// console.log(removeChar('eloquent'));
// Notes: I had a hard time figuring out which JS method to use. I also didn't really understand the documentation about the range for the slice and replace methods. I was also really confused about string indexes. If strings are arrays, why did the slice method not work with (0, str.length - 1);?
//UPDATE: I understand now. .slice method parameters (start, end) are zero-index based and that means .slice parameters ARE the start and end of the new string. Ex: .slice(2, var.length - 1) for James will return 'me'. J[0], A[1], M[2], E[3], S[4] => start is two and end is .length - 1. So 'me' is the return.
////////////////////////////////////////////////////////////////////////////////////////////

//8 Kyu - You Only Need One (Beginner) (Completed 6.26.22)
// const a = [0, 1, "donut", 10];
// function check(a, x) {
//     let xInA = undefined;
//     for(let i = 0; i < a.length; i++) {
//       xInA = (x === a[i]) ? true : false;
//     }
//     return xInA;
//   }
//   console.log(check(a, "donut"));
//Note: This solution won't work because it goes through every single one and assigns xInA the final value. Place "donut" at index 0 or 1, and ther return will be false. The assignment asks the function to return true if x can be found in a, so a for loop is the wrong choice here. What's needed is a break from the for loop when x === a[i] equates to true

// function check(a, x) {
//     let xInA = undefined;
//     for(let i = 0; i < a.length; i++) {
//       xInA = (x === a[i]) ? true : false;
//       if(xInA === true) {
//         break;
//       }
//     }
//     return xInA;
//   }
////////////////////////////////////////////////////////////////////////////////////////////
