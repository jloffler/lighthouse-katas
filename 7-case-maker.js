/*
  Create a function named camelCase that will convert a string to camel case,
  and return the result.
*/

let camelCase = function(input) {
  let str = input.toLowerCase();
  // turn str into an array of words, trim() deals with leading/trailing space
  // 2 spaces in a row eg. '  ' with not work with this function.
  str = str.trim().split(' ');

  // Captialize first letter of each word EXCEPT the first word
  for (let i = 1; i < str.length; i++) { // start at 1 to skip 1st word
    let cap = str[i][0].toUpperCase();
    str[i] = cap + str[i].slice(1);
  }

  // join words of str together and return
  return str.join('');
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/* Output
  thisIsAString
  loopyLighthouse
  supercalifragalisticexpialidocious
*/
