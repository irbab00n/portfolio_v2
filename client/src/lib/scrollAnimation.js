// module.exports.linear = (start, destination) => {
//   let i = start;
//   let scrollDown = start <= destination;
//   let int = setInterval(() =>  {
//     if (scrollDown) {
//       window.scrollTo(0, i);
//       i += 10; // Incrementation based on visual testing
//       if (i >= destination) {
//         clearInterval(int);
//       }
//     } else {
//       window.scrollTo(0, i);
//       i -= 10; // Incrementation based on visual testing
//       if (i <= destination) {
//         clearInterval(int);
//       }
//     }
//   }, 1);
// };

// const calculatePercentage = (i, destination, originalGap) => {
//   let currentGap = Math.abs(i - destination); // find out the current gap
//   let remainder = originalGap - currentGap; // calculate the remaining amount to go
//   let percentage = remainder / originalGap; // divide the remainder by the original gap, this will produce a percentage
//   return percentage;
// };

// const calculateCoefficient = (i, destination, originalGap) => {
//   return Math.round(90 * calculatePercentage(i, destination, originalGap));
// };

// module.exports.accelerate = (start, destination) => {
//   // clear any interval currently existing
//   clearInterval(int);
//   // create i and set it equal to the start value that comes in
//   let i = start;

//   // figure out the total gap that we need to traverse
//   let originalGap = Math.abs(start - destination);

//   if (originalGap <= 5) {
//     return;
//   } 

//   let scrollDown = start <= destination; // True: Scroll Down, False: Scroll Up

//   let int = setInterval(() => {
//     // if we need to go down
//     if (scrollDown) {
//       // scroll the window to the y position saved at i
//       window.scrollTo(0, i);
//       // save i to the value calculated by the coefficient
//       i += (100 - calculateCoefficient(i, destination, originalGap));
//       // if we reach the end
//       if (i > destination) {
//         // clear the interval function
//         clearInterval(int); 
//       }
//     } else { // go up
//       window.scrollTo(0, i);
//       i -= (100 - calculateCoefficient(i, destination, originalGap)); // Incrementation based on visual testing
//       if (i < destination) {
//         clearInterval(int);
//       }
//     }
//   }, 0.5);
// }

// // must update the speed while the start isn't half of the difference between itself and the destination

// // we need to refactor this in a way that uses requestAnimationFrame
