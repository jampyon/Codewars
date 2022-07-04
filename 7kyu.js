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

//7 Kyu - Highest and Lowest (Completed 7.3.2022)
//Assignment: In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// function highAndLow(numbers){
//     const argConvert = numbers.match(/(-\d+|\d+)(,\d+)*(\.\d+)*/g);
//     const numArray = [];
//     for(let i = 0; i < argConvert.length; i++) {
//         numArray.push(Number(argConvert[i]));
//     }
//     return `${Math.max(...numArray)} ${Math.min(...numArray)}`;
// }
//Note: Used regex (numbers.match(/(-\d+|\d+)(,\d+)*(\.\d+)*/g)) to extract all the numbers into the argConvert variable. Math.max/min syntax is different for arrays. It needs the ellipses (...arrName) to work. What the best solutions used is var.split(" "); and then used Math.max/min to get the answers.
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
////////////////////////////////////////////////////////////////////////////////////////////

//7 Kyu - Odds or Evens (Completed 7.3.22)
// function oddOrEven(array) {
//     let sum = 0;
//     for(let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//     return (sum % 2 === 0 || sum % 2 === -0) ? "even" : "odd";
//  }
//Notes: The issue I was having was that adding and using the remainder operator (%) with negative numbers was returning -0, which wasn't accounted in the conditional/ternary operator.
////////////////////////////////////////////////////////////////////////////////////////////

//7 Kyu - Sum of odd numbers (Completed 7.3.22)
// function rowSumOddNumbers(n) {
//     return n * n * n;
//   }
//Notes: Pyramid of consecutive odd integers. Row 1 was 1, Row 2 was 3 and 5...The problem was to find the sum of nth row and return the sum. I don't know why this worked, but it worked.
////////////////////////////////////////////////////////////////////////////////////////////

