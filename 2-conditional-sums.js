/*
  For this kata, we'll be adding only the numbers in the array which match the
  given condition--either 'odd', or 'even'.
*/

const conditionalSum = function(values, condition) {
  let remainder = (condition === "even" ? 0 : 1);
  let total = 0;
  for (let item of values) {
    if (item % 2 === remainder) total += item;
  }
  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

/*
  Output:
  6
  9
  144
  0
*/