

var PlayerRed = "R";

var PlayerYellow = "Y";

var CurrentP = PlayerRed;

var GameOver = false; 

var board; 

var CurrCols;




var rows = 6; 

var col = 7;


window.onload = function(){

    setGame();
}


function setGame(){
    board = [];
    CurrCols = [5,5,5,5,5,5,5];

    for (let r=0;r<rows;r++){
        let row=[];
        for (let c=0;c<col;c++){

            //JS
            row.push(' ');

            //HTML
            //adds tiles to hmtl board
            let tile = document.createElement("div");
            tile.id = r.toString() + " - "+c.toString();
            tile.addEventListener("click",setPiece);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);

        }

        board.push(row);
    }
}

function setPiece(){


    if (GameOver == true){

        return; 

    }

    let coords = this.id.split("-"); 
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    r = CurrCols[c];
    if (r<0){

        return; 

    }

    board[r][c] = CurrentP; 
    let tile = document.getElementById(r.toString()+" - "+c.toString()); 
    if (CurrentP == PlayerRed){
        tile.classList.add("red-piece");
        CurrentP=PlayerYellow;


    }
    else {
        tile.classList.add("yellow-piece");
        CurrentP=PlayerRed;
    }

    r-=1; 
    CurrCols[c]=r; 

    checkWinner();
}



function checkWinner(){

    //horizontal check 

    for (let r=0; r <rows; r++){

        for (let c=0;c<col-3; c++ ){

            if(board[r][c] !=' '){

                if (board[r][c]==board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]){

                    setWinner(r,c); 
                    return; 


                }

            }


        }
    }


    //vertical check 

    for (let r=0; r <rows-3; r++){

        for (let c=0;c<col; c++ ){

            if(board[r][c] !=' '){

                if (board[r][c]==board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]){

                    setWinner(r,c); 
                    return; 


                }

            }


        }
    }

    //diagonal checks

    for (let r=0; r<rows-3;r++){

        for (let c=0; c<col-3;c++){

            if (board[r][c] != ' '){

                if (board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]){
                    setWinner(r,c);
                    return; 
                }


            }


        }



    }

    for (let r=3;r<rows;r++){

        for (let c=0;c<col-3;c++){

            if (board[r][c] != ' '){

                if (board[r][c]== board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]){


                    setWinner(r,c);
                    return; 




                }


            }





        }



    }



}


function setWinner(r,c){


    let winner = document.getElementById("winner"); 
    if (board[r][c]== PlayerRed ){

        winner.innerText = "Red wins!"; 




    }else {


        winner.innerText = "Yellow wins!"; 


    }


    GameOver = true; 



}