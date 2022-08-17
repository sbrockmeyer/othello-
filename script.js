
//Track total num of each color for win calculations.
var whitePieces = 0;
var blackPieces = 0;
var board = new Array(8);
var currentPlayer = 1;

function buildBoard(){
    //Turn grid into a 2D array
    for (var i = 0; i < board.length; i++) {
        board[i] = new Array(8);
    }

    //Fill 2D array with Grid Elements
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            board[i][j] = document.getElementById(`btn${i+1},${j+1}`);
        }
    }
}

function checkHorizontal(x, y){
    var validRow = false;


    //If current player is 1
    if(currentPlayer == 1){
        //Check black pieces with a white piece next to it
        for (var i = x; i < 8; i++) {
            for (var j = y; j < 8; j++) {
                if(board[i][j].innerHTML == "Black"){
                    if(board[i+1][j].innerHTML == "White" || board[i-1][j].innerHTML == "White"){
                        validRow = true;
                    }
                }
                
            }
        }
    }
    else if(currentPlayer == 0){
        //Check white pieces with a black piece next to it
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if(board[i][j].innerHTML == "White"){
                    if(board[i+1][j].innerHTML == "Black" || board[i-1][j].innerHTML == "Black"){
                        validRow = true;
                    }
                }
            }
        }
    }
return validRow;
}
function checkVertical(x, y){
    var validColumn = false;
        //If current player is 1
        if(currentPlayer == 1){
            //Check black pieces with a white piece next to it
            for (var i = x; i < 8; i++) {
                for (var j = y; j < 8; j++) {
                    if(board[i][j].innerHTML == "Black"){
                        if(board[i][j+1].innerHTML == "White" || board[i][j-1].innerHTML == "White"){
                            validColumn = true;
                        }
                    }
                    
                }
            }
        }
        else if(currentPlayer == 0){
            //Check white pieces with a black piece next to it
            for (var i = 0; i < 8; i++) {
                for (var j = 0; j < 8; j++) {
                    if(board[i][j].innerHTML == "White"){
                        if(board[i][j+1].innerHTML == "Black" || board[i][j-1].innerHTML == "Black"){
                            validColumn = true;
                        }
                    }
                }
            }
        }
    return validColumn;
}
function checkDiagonal(x, y){
    var validDiagonal = false;
    //If current player is 1
    if(currentPlayer == 1){
        //Check black pieces with a white piece next to it
        for (var i = x; i < 8; i++) {
            for (var j = y; j < 8; j++) {
                if(board[i][j].innerHTML == "Black"){
                    if(board[i+1][j+1].innerHTML == "White" || board[i-1][j-1].innerHTML == "White" || board[i+1][j-1].innerHTML == "White" || board[i-1][j+1].innerHTML == "White"){
                        validDiagonal = true;
                    }
                }
                
            }
        }
    }
    else if(currentPlayer == 0){
        //Check white pieces with a black piece next to it
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if(board[i][j].innerHTML == "White"){
                    if(board[i+1][j+1].innerHTML == "Black" || board[i-1][j-1].innerHTML == "Black" || board[i+1][j-1].innerHTML == "Black" || board[i-1][j+1].innerHTML == "Black"){
                        validDiagonal = true;
                    }
                }
            }
        }
    }
    return validDiagonal;
}


function flip(){
    //When btn is clicked
    console.log(this.id)
    //Check if any adjacent pieces are the opposite color
    //IF adjacent pieces are the opposite color,
        //Check the next piece over until they find the same color
        //Save each btnID
        //Change all btnID to the current color
    //ELSE don't
}


