/*
  Create a function named talkingCalendar that takes in a date string with the
  format YYYY/MM/DD, and returns a new human readable date that looks like
  December 2nd, 2017.
*/

/* Date cases
      1st
          2nd
              3rd
  4th
  ...
  10th
  11th <== gotchas
  12th <== gotchas
  13th <== gotchas
  ...
  20th
      21st
          22nd
              23rd
  24th
  ...
  30th
      31st
*/

let talkingCalendar = function(date) {
  const DATEARRAY = date.split('/');
  const MONTHS = ['null', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let str = '';

  function getContraction(num) {
    // code works even tho num is a string... won't bother changing to number or changing cases to strings
    if (num == 11 || num == 12 || num == 13) {
      return 'th';
    } else {
      // num to 1 digit
      num = num.slice(-1);
    }
    if (num == 1) {
      return 'st';
    } else if (num == 2) {
      return 'nd';
    } else if (num == 3) {
      return 'rd';
    } else {
      return 'th';
    }
  }

  // add month (word) to string
  str += MONTHS[Math.floor(DATEARRAY[1])] + ' '; // date is index 1 of array

  // add day plus (st, nd, rd, th) + ', '
  let day = DATEARRAY[2];
  // need to deal with numbers less 10 having padded 0
  if (day < 10) day = day.slice(-1);
  let contraction = getContraction(day);
  str += day + contraction + ', ';

  // add year
  str += DATEARRAY[0];

  return str;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/* Output
  December 2nd, 2017
  November 11th, 2007
  August 24th, 1987
*/