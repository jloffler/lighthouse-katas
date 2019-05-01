/*
In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays
within an array). For this exercise, our chess board will have 2 queens, and
nothing else. A 1 in the array represents a queen on the corresponding square,
and a O in the array represents an unoccupied square.

Our first challenge will be to write a function that generates a chess board
like this. We will then write a function to detect weather or not the two queens
are positioned so that they attack each other.
*/


// white and black are arrays with 2 values: [column, row]
function generateBoard(white, black) {
  let board = [];
  // generate rows
  for (let row = 0; row < 8; row++) {
    // start a new empty row
    board.push([]);
    // generate empty spaces and queens
    for (let col = 0; col < 8; col++) {
      if ( (row == white[1] && col == white[0]) ||
           (row == black[1] && col == black[0]) ) {
        // if true then this is a queen location
        board[row].push(1);
      } else {
        // empty space
        board[row].push(0);
      }
    }
  }
  return board;
}


function queenThreat(board) {
  // [column, row]
  let white = [];
  let black = [];
  // problem 1: get queen locations
  // indexOf ( gets the first... )
  // lastIndexOf
  for (let row = 0; row < board.length; row++) {
    let col1 = board[row].indexOf(1);
    let col2 = board[row].lastIndexOf(1);
    if (col1 == -1) {
      // intentionally empty--no queens on this row
    } else if (col1 != col2) {
      // queens on same row
      white.push(col1, row);
      black.push(col2, row);
    } else {
      // one queen on this row
      if (white.length == 0) {
        // white queen is still empty
        white.push(col1, row);
      } else {
        // black queen is still empty
        black.push(col1, row);
      }
    }
  }

  // problem 2: threat?
  // vertical or horizontal threat
  if (white[0] == black[0] || white[1] == black[1]) {
    return true;
  // diagonal threat (if difference in posisions vert and horiz are equal)
  } else if (Math.abs(white[0] - black[0]) == Math.abs(white[1] - black[1])) {
    return true;
  } else {
    return false;
  }
}


/* Test Input 1 */
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

/* Output 1
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true
*/

/* Test Input 2 */
whiteQueen = [0, 0];
blackQueen = [7, 5];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard)
console.log(queenThreat(generatedBoard));

/* Output 2
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false
*/