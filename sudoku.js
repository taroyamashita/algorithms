let sudokuChecker = function(boardString){
    // check rows;
    // check columns; 
    // check grid; 
    // 
    
    //create rows
    let boardArray = boardString.split("\n");
    let isValid = 'solved'

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

    let boardGrids = [];
    for(let i = 0; i < boardArray.length-2; i+=3){
        let grid = ""
        let grid2 = "";
        let grid3 = ""
        let gridChunk1 = boardArray[i].slice(0,3);
        let gridChunk2 = boardArray[i+1].slice(0,3);
        let gridChunk3 = boardArray[i+2].slice(0,3);
        let gridChunk4 = boardArray[i].slice(3,6);
        let gridChunk5 = boardArray[i+1].slice(3,6);
        let gridChunk6 = boardArray[i+2].slice(3,6);
        let gridChunk7 = boardArray[i].slice(6);
        let gridChunk8 = boardArray[i+1].slice(6);
        let gridChunk9 = boardArray[i+2].slice(6);
        grid+=gridChunk1;
        grid+=gridChunk2;
        grid+=gridChunk3;
        grid2+=gridChunk4;
        grid2+=gridChunk5;
        grid2+=gridChunk6;
        grid3+=gridChunk7;
        grid3+=gridChunk8;
        grid3+=gridChunk9;

        boardGrids.push(grid);
        boardGrids.push(grid2);
        boardGrids.push(grid3);
    }
    console.log('board Array is \n', boardArray);
    console.log('board columns are \n', boardColumnsArray);
    console.log('board grids are \n', boardGrids);

    boardArray.forEach((string)=>{
        for(var i = 1; i <= 9; i++){
            if(!string.includes(i.toString())){
                isValid = 'invalid'
            }
        }       
    })
    boardColumnsArray.forEach((string)=>{
        for(var i = 1; i <= 9; i++){
            if(!string.includes(i.toString())){
                isValid = 'invalid'
            }
        }       
    })
    boardGrids.forEach((string)=>{
        for(var i = 1; i <= 9; i++){
            if(!string.includes(i.toString())){
                isValid = 'invalid'
            }
        }       
    })

    console.log(isValid);

    return isValid; 

}

let test = "735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429"

sudokuChecker(test);