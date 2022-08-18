
//Track total num of each color for win calculations.
var whitePieces = 0;
var blackPieces = 0;
var board = new Array(8);
var currentPlayer = 1;
var player1Token = "";
var player2Token = "";

function buildBoard() {
    //Turn grid into a 2D array
    for (var i = 0; i < board.length; i++) {
        board[i] = new Array(8);
    }

    //Fill 2D array with Grid Elements
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            board[i][j] = document.getElementById(`btn${i},${j}`);
        }
    }
    board[3][3].getElementsByTagName("img")[0].src = player1Token;
    board[4][4].getElementsByTagName("img")[0].src = player1Token;
    board[3][4].getElementsByTagName("img")[0].src = player2Token;
    board[4][3].getElementsByTagName("img")[0].src = player2Token;

}

function setPlayerToken(clickID) {
    console.log(clickID);
    if (currentPlayer == 0) {
        player1Token = document.getElementById(clickID).getElementsByTagName("img")[0].src;
        currentPlayer = 1;
        console.log(player1Token);
    }
    else {
        player2Token = document.getElementById(clickID).getElementsByTagName("img")[0].src;
        currentPlayer = 0;
        console.log(player2Token);
    }
}

function flip(clickID) {
    //When btn is clicked
    //Check if any adjacent pieces are the opposite color
    //IF adjacent pieces are the opposite color,
    var xyPoints = clickID.substring(3);

    if (checkHorizontal(xyPoints[0], xyPoints[2])) {
        if (currentPlayer == 0) {
            document.getElementById(`btn${xyPoints[0]},${xyPoints[2]}`).getElementsByTagName("img")[0].src = player1Token;
            for (var i = xyPoints[2]; i < 8; i++) {
                if (board[xyPoints[0]][i].getElementsByTagName("img")[0].src === player2Token) {
                    board[xyPoints[0]][i+1].getElementsByTagName("img")[0].src = player1Token;
                }
            }
            currentPlayer = 1;
        }
        else {
            document.getElementById(`btn${xyPoints[0]},${xyPoints[2]}`).getElementsByTagName("img")[0].src = player2Token;
            for (var i = xyPoints[0]; i < 8; i++) {
                if ([xyPoints[0]][i].getElementsByTagName("img")[0].src === player1Token) {
                    board[xyPoints[0]][i-1].getElementsByTagName("img")[0].src = player2Token;
                }
            }
            currentPlayer = 0;
        }
    }
        
        console.log("Vertical Check: " + checkVertical(xyPoints[0], xyPoints[2]))
        if (checkVertical(xyPoints[0], xyPoints[2])) {
            if (currentPlayer == 0) {
                document.getElementById(`btn${xyPoints[0]},${xyPoints[2]}`).getElementsByTagName("img")[0].src = player1Token;
                for (var i = xyPoints[0]; i < 8; i++) {
                    if (board[i][xyPoints[2]].getElementsByTagName("img")[0].src === player2Token) {
                        board[i + 1][xyPoints[2]].getElementsByTagName("img")[0].src = player1Token;
                    }
                }
                currentPlayer = 1;
            }
            else {
                document.getElementById(`btn${xyPoints[0]},${xyPoints[2]}`).getElementsByTagName("img")[0].src = player2Token;
                for (var i = xyPoints[0]; i < 8; i++) {
                    if (board[i][xyPoints[2]].getElementsByTagName("img")[0].src === player1Token) {
                        board[i + 1][xyPoints[2]].getElementsByTagName("img")[0].src = player2Token;
                    }
                }
                currentPlayer = 0;
            }
        }

        // console.log("Diagonal Check: " + checkDiagonal(xyPoints[0], xyPoints[2]))
        // if (checkDiagonal(xyPoints[0], xyPoints[2])) {
        //     for (var i = xyPoints[0]; i < 8; i++) {
        //         for (var j = xyPoints[2]; j < 8; j++) {
        //             if (board[i + 1][j + 1].getElementsByTagName("img")[0].src == player2Token) {
        //                 board[i + 1][j + 1].getElementsByTagName("img")[0].src = player1Token;
        //             }
        //             if (board[i - 1][j - 1].getElementsByTagName("img")[0].src == player2Token) {
        //                 board[i - 1][j - 1].getElementsByTagName("img")[0].src = player1Token;
        //             }
        //             if (board[i + 1][j - 1].getElementsByTagName("img")[0].src == player2Token) {
        //                 board[i + 1][j - 1].getElementsByTagName("img")[0].src = player1Token;
        //             }
        //             if (board[i - 1][j + 1].getElementsByTagName("img")[0].src == player2Token) {
        //                 board[i - 1][j + 1].getElementsByTagName("img")[0].src = player1Token;
        //             }
        //         }
        //     }
        // }
        
    }

    function checkHorizontal(x, y) {
        var validRow = false;
        //If current player is 1
        if (currentPlayer == 0) {
            //Check black pieces with a white piece next to it
            for (var i = y; i < 8; i++) {
                if (board[x][i].getElementsByTagName("img")[0].src === player2Token) {

                    if (board[x][i + 1].getElementsByTagName("img")[0].src != null && board[x][i + 1].getElementsByTagName("img")[0].src === player1Token) {
                        validRow = true;
                    }
                }
            }

            for (var i = y; i > 0; i -= 1) {
                if (board[x][i].getElementsByTagName("img")[0].src === player2Token) {

                    if (board[x][i - 1].getElementsByTagName("img")[0].src != null && board[x][i - 1].getElementsByTagName("img")[0].src === player1Token) {
                        validRow = true;
                    }
                }
            }
        }
        else if (currentPlayer == 1) {
            //Check white pieces with a black piece next to it
            for (var i = y; i < 8; i++) {
                if (board[x][i].getElementsByTagName("img")[0].src === player1Token) {

                    if (board[x][i + 1].getElementsByTagName("img")[0].src != null && board[x][i + 1].getElementsByTagName("img")[0].src === player2Token) {
                        validRow = true;
                    }
                }
            }

            for (var i = y; i > 0; i -= 1) {
                if (board[x][i].getElementsByTagName("img")[0].src === player1Token) {

                    if (board[x][i - 1].getElementsByTagName("img")[0].src != null && board[x][i - 1].getElementsByTagName("img")[0].src === player2Token) {
                        validRow = true;
                    }
                }
            }
        }
        return validRow;
    }
    function checkVertical(x, y) {
        var validColumn = false;
        //If current player is 1
        if (currentPlayer == 0) {
            //Check black pieces with a white piece next to it
            for (var i = x; i < 8; i++) {
                if (board[i][y].getElementsByTagName("img")[0].src === player2Token) {

                    if (board[i + 1][y].getElementsByTagName("img")[0].src != null && board[i + 1][y].getElementsByTagName("img")[0].src === player1Token) {
                        validRow = true;
                    }
                }
            }

            for (var i = x; i > 0; i -= 1) {
                if (board[i][y].getElementsByTagName("img")[0].src === player2Token) {

                    if (board[i + 1][y].getElementsByTagName("img")[0].src != null && board[i - 1][y].getElementsByTagName("img")[0].src === player1Token) {
                        validRow = true;
                    }
                }
            }
        }
        else if (currentPlayer == 1) {
            //Check white pieces with a black piece next to it
            for (var i = x; i < 8; i++) {
                if (board[i][y].getElementsByTagName("img")[0].src === player1Token) {

                    if (board[i + 1][y].getElementsByTagName("img")[0].src != null && board[i + 1][y].getElementsByTagName("img")[0].src === player2Token) {
                        validRow = true;
                    }
                }
            }

            for (var i = x; i > 0; i -= 1) {
                if (board[i][y].getElementsByTagName("img")[0].src === player1Token) {

                    if (board[i + 1][y].getElementsByTagName("img")[0].src != null && board[i - 1][y].getElementsByTagName("img")[0].src === player2Token) {
                        validRow = true;
                    }
                }
            }
        }
        return validColumn;
    }
// function checkDiagonal(x, y) {
//     var validDiagonal = false;
//     //If current player is 1
//     if (currentPlayer == 0) {
//         //Check black pieces with a white piece next to it
//         for (var i = x; i < 8; i++) {
//             for (var j = y; j < 8; j++) {
//                 if (board[i][j].getElementsByTagName("img")[0].src == player1Token) {
//                     if (board[i + 1][j + 1].getElementsByTagName("img")[0].src == player2Token || board[i - 1][j - 1].getElementsByTagName("img")[0].src == player2Token || board[i + 1][j - 1].getElementsByTagName("img")[0].src == player2Token || board[i - 1][j + 1].getElementsByTagName("img")[0].src == player2Token) {
//                         validDiagonal = true;
//                     }
//                 }

//             }
//         }
//     }
//     else if (currentPlayer == 1) {
//         //Check white pieces with a black piece next to it
//         for (var i = 0; i < 8; i++) {
//             for (var j = 0; j < 8; j++) {
//                 if (board[i][j].getElementsByTagName("img")[0].src == player2Token) {
//                     if (board[i + 1][j + 1].getElementsByTagName("img")[0].src == player1Token || board[i - 1][j - 1].getElementsByTagName("img")[0].src == player1Token || board[i + 1][j - 1].getElementsByTagName("img")[0].src == player1Token || board[i - 1][j + 1].getElementsByTagName("img")[0].src == player1Token) {
//                         validDiagonal = true;
//                     }
//                 }
//             }
//         }
//     }
//     return validDiagonal;
// }




