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