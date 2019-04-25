/*
  The input data for this exercise will be two dimensional array (an array of
  arrays), where each sub-array will have two numeric values. For example:
  [[1, 2], [2, 3]]

  Create a function named repeatNumbers that will return a string with each of
  the given values repeated the appropriate number of times, each set of values
  separated by a comma. If there is only one set of values then you should omit
  the comma.
*/

let repeatNumbers = function(data) {
  let text = '';
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      text += data[i][0];
    }
    if (i < data.length - 1) text += ', ';
  }
  return text;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

/* Output
  1111111111
  11, 222
  10101010, 343434343434, 9292
*/