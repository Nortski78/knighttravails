import { Matrix } from "./matrix.js";

function isSafe(coords, matrixSize) {
  //[xPos, yPos] = coords; // this not working for some reason
  let xPos = coords[0];
  let yPos = coords[1];
  if((xPos >= 0 && xPos < matrixSize) && (yPos >= 0 && yPos < matrixSize)) return true;
  return false;
}

export function knightTravails(start, end) {  
    const chessboard = Matrix(8);
    const startCell = chessboard.getCell(start);
    const endCell = chessboard.getCell(end);
    const possMoves = [[1,-2], [1,2], [-1,-2], [-1,2], [-2,1], [2,1], [-2,-1], [2,-1]];
    
    let prev = new Array(Object.keys(chessboard.getMatrix()).length).fill(null);
    let path = [];
    
    let queue = [startCell];
    startCell.setVisited(true);
    
    while(queue.length > 0) {
  
      const cell = queue.shift();
      
      for(let i = 0; i < possMoves.length; ++i) {
        let newCoords = [cell.getRow() + possMoves[i][0], cell.getCol() + possMoves[i][1]];
        
        if(!isSafe(newCoords, chessboard.getMatrixSize())) continue;
        
        let destCell = chessboard.getCell(newCoords);
  
        if(!destCell.isVisited()) {
          queue.push(destCell);
          destCell.setVisited(true);
          prev[chessboard.getMatrix().indexOf(destCell)] = chessboard.getMatrix().indexOf(cell);
        }
      }
    }
    
    for(let at = chessboard.getMatrix().indexOf(endCell); at != null; at = prev[at]) {
      path.push(at);
    }
  
    path.reverse();
    
    if(path[0] == chessboard.getMatrix().indexOf(startCell)) {  
      let output = `It take ${path.length} moves from [${start}] to [${end}]:\n`;
      for(const node of path) {
        output += `[${chessboard.getMatrix()[node].getRow()}, ${chessboard.getMatrix()[node].getCol()}]\n`;
      }
      return output;
    }
    
    return "No path";
  }