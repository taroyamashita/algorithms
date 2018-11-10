let sudokuChecker = function(boardString){
    // check rows;
    // check columns; 
    // check grid; 
    // 
    
    //create rows
    let boardArray = boardString.split("\n");

    // create columns 
    let boardColumnsArray = []; 
    for(let i =0; i< boardArray.length; i++){
        let boardColumn = [];
        for(let j = 0; j < boardArray.length; j++){
            boardColumn.push(boardArray[j][i]);
        }
        boardColumnsArray.push(boardColumn.join(""));
    }

    // create grid; 

    let boardGrids = [[],[],[],[],[],[],[],[],[],[]];
    for(let i = 0; i < boardArray.length; i++){
        let currRow = boardArray[i].split("");
        console.log(currRow);
    

}

let test = "735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429"

sudokuChecker(test);