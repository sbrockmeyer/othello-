
//Track total num of each color for win calculations.
var whitePieces = 0;
var blackPieces = 0;

//Turn grid into a 2D array
var board = new Array(8);
for (var i = 0; i < board.length; i++) {
    board[i] = new Array(8);
}

var x = 1;
var y = 1;
//Fill 2D array with Grid Elements
for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        board[i][j] = document.getElementById(`btn${x},${y}`);
        x++;
    }
    y++;
}




