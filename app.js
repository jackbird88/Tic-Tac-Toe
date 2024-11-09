const board = document.getElementById('board');
const squares = document.getElementsByClassName('square');
const players = ['X', 'Y'];
let currentPlayer = players[0];
const boardArray = Array(squares.length);

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boardArray.fill(null);


//Click a DIV
const onClick = function() {
    console.log(this.id, this.innerHTML);
    return this.id;
  }

  document.getElementById('square0').onclick = onClick;
  document.getElementById('square1').onclick = onClick;
  document.getElementById('square2').onclick = onClick;
  document.getElementById('square3').onclick = onClick;
  document.getElementById('square4').onclick = onClick;
  document.getElementById('square5').onclick = onClick;
  document.getElementById('square6').onclick = onClick;
  document.getElementById('square7').onclick = onClick;
  document.getElementById('square8').onclick = onClick;

