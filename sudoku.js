let sudokuChecker = function(boardString){
    // check rows;
    // check columns; 
    // check grid; 
    // 
    
    let boardArray = boardString.split("\n");
    console.log(boardArray);

    

    let columnMaker = function(boardArray){
        let boardColumns = [];
        for(let i =0; i< boardArray.length; i++){
            for(let j = 0; j < boardArray.length; j++){
                
            }
        }



        return boardColumns; 
    }

}

let test = "735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429"

sudokuChecker(test);