

var PlayerRed = "R";

var PlayerYellow = "Y";

var CurrentP = PlayerRed;

var GameOver = false; 

var board; 


var rows = 6; 

var col = 7;


window.onload = function(){

    setGame();
}


function setGame(){
    board = [];

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

    board[r][c] = CurrentP; 
    let tile = this; 
    if (CurrentP == PlayerRed){
        tile.classList.add("red-piece");
        CurrentP=PlayerYellow;


    }
    else {
        tile.classList.add("yellow-piece");
        CurrentP=PlayerRed;
    }
}