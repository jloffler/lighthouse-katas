/*
  In this exercise, we will be counting the number of vowels that appear in a
  given string. For this exercise, consider the following to be
  vowels: a, e, i, o, and u.
*/

let numberOfVowels = function(data) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let total = 0;

  for (let item of vowels) {
    for (let i of data) {
      if (item === i) total += 1;
    }
  }
  return total;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

/* Output:
  3
  5
  5
*/
