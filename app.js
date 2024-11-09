const board = document.getElementById('board');
const squares = document.getElementsByClassName('square');
const players = ['X', 'O'];
let currentPlayer = players[0];

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


  //Show the End Trun message
  const endMessage = document.createElement('h2')
  endMessage.textContent = `X's turn!`
  endMessage.style.marginTop = '30px'
  endMessage.style.textAlign='center'
  board.after(endMessage)

  //Check for Win
  function checkWin(currentPlayer) {
    for(let i = 0; i < winningCombinations; i++){
        const [a, b, c] = winningCombinations[i]
        if(squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer){
            return true
        }
    }
    return false
}
