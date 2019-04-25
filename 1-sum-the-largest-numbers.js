/* In this exercise, we will be given an array of 2 or more numbers. We will
   then have to find the two largest numbers in that array, and sum them
   together.
*/

let sumLargestNumbers = function(data) {
  let largest = 0;
  let second = 0;
  for (let item of data) {
    if (item > largest) {
      second = largest;
      largest = item;
    } else if (item > second) {
      second = item;
    }
  }
  return largest + second;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

/* Output
   11
   5
   126
*/