/*
We will be given two numbers, the total of a transaction, and the amount of cash
given to the cashier. Both of these numbers will be represented as whole numbers
in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total
amount of change for the cashier to give back. Although pennies are not used in
circulation, we will still calculate the amount of pennies to give back.

Valid denominations are as follows:

// NOTE none of the names are capitalized in example except 'twoDollar'?
    Twenty dollars -- 100s even remainder 1 ten or less
    Ten dollars -- less than 20, more than 10
    Five dollars -- less than ten more than 5
    Two dollars => they use 'twoDollar' in answer
    One dollar => they use 'dollar' in answer
    Quarter (25¢)
    Dime (10¢)
    Nickel (5¢)
    Penny (1¢)

    NOTES
    start by dividing by twenty, minus w/e that is
    138.67 should use each denomination
    13867/2000 = 6 x twenties
    13867 - 2000*6 / tens repeat
    what happens if case is 0? use math.floor

    how to store denominations? array or obj? array of objects?
    then build our new object to return?

Create a function named calculateChange that takes in a total amount of a bill
and the total cash given to pay that bill. Return a new object that describes
the total amount of change for the cashier to give back. Omit any types of
change that you shouldn't give back, i.e. if you don't give back a twenty dollar
bill, don't include it in the results.
*/

let calculateChange = function(total, cash) {
  if (cash < total) return 'Hey! Trying to pull a fast one?';

  let denominations = [
    {name:'twentyDollar', value:2000},
    {name:'tenDollar', value:1000},
    {name:'fiveDollar', value:500},
    {name:'twoDollar', value:200},
    {name:'dollar', value:100},
    {name:'quarter', value:25},
    {name:'dime', value:10},
    {name:'nickel', value:5},
    {name:'penny', value:1}
  ];

  let cashLeft = cash - total;
  let changeObj = {};

  for (let obj of denominations) {
    let num = Math.floor(cashLeft / obj.value);
    if (num > 0) {
      cashLeft -= num * obj.value;
      changeObj[obj.name] = num;
    }
  }

  return changeObj;
}


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/* Output
{ twoDollar: 1, dime: 1, penny: 3 }
{ ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/