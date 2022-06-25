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