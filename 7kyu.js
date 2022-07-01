//7 Kyu - Get the Middle Character (Completed 6.28.2022)
// function getMiddle(s) {
//     const evenOrOdd = (s.length % 2 === 0) ? "even" : "odd";
//     let charGrabber = "0";
//     if (evenOrOdd === "even") {
//       charGrabber = s.charAt((s.length / 2) - 1) + s.charAt(s.length / 2);
//     } else if(evenOrOdd === "odd") {
//       charGrabber = s.charAt(s.length / 2);
//     }
//     return charGrabber;
//   }
//Notes: This one was a bit rough, personally, because it took me a while to get the math down. I knew that I needed to calculate with the length of the param/arg, but it took me a while. Also, my solution isn't DRY. For the if/else if statement, I should've used something else.
////////////////////////////////////////////////////////////////////////////////////////////

//7 Kyu - Highest and Lowest ()
//Assignment: In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// const str = "-19 2 3 44";
// const returnArr = [];
// function highAndLow(str) {
//     for(let i = 0; i < str.length; i++) {
//         if(str.charAt(i) === " ") {
//             returnArr.push(parseInt(str));
//         }
//     }
//     return returnArr;
// }
// console.log(highAndLow(str));
//Note: STUUUUUUUUUUUUUUUUUUUUUUUUUCK
////////////////////////////////////////////////////////////////////////////////////////////

//7 Kyu - Exes and Ohs (Completed 6.29.22)
//Assignment: Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// function XO(str) {
//     let xCounter = 0;
//     let oCounter = 0;
//     for(let i = 0; i < str.length; i++) {
//       if(str.charAt(i) === "x" || str.charAt(i) === "X") {
//         xCounter += 1;
//       } else if(str.charAt(i) === "o" || str.charAt(i) === "O") {
//         oCounter += 1;
//       }
//     }
//     const boolChecker = (xCounter === oCounter) ? true : false;
//     return boolChecker;
// }
//Notes: This took me too long to do. The issue was syntax with .charAt(). I kept running it while it said .charAt[] when the correct syntax is parentheses. Also, there's an easier method. Review the code next time.