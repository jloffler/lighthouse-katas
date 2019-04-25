/*
  Create a function named urlEncode that will receive a string of words, and
  return that string with all of the whitespace characters converted to %20.
  If there is whitespace on the outside of the string, just the whitespace.

  Use some sort of looping. Do Not use String.prototype.replace
*/

const urlEncode = function(text) {
  let newText = '';
  for (let letter of text.trim()) {
    if (letter === ' ') {
      newText += '%20';
    } else {
      newText += letter;
    }
  }

  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

/* Output
  Lighthouse%20Labs
  Lighthouse%20Labs
  blue%20is%20greener%20than%20purple%20for%20sure
*/