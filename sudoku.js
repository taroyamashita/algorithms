let sudokuChecker = function(boardString){
    // check rows;
    // check columns; 
    // check grid; 
    // 
    
    let boardArray = boardString.split("\n");
    console.log(boardArray);

    let boardColumnsArray = []; 

    for(let i =0; i< boardArray.length; i++){
        let boardColumn = [];
        for(let j = boardArray.length-1; j >0; j--){
            console.log(boardArray);
            boardColumn.push(boardArray[j][i]);
        }
        console.log(boardColumn);
        boardColumnsArray.push(boardColumn);
    }

}

let test = "735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429"

sudokuChecker(test);