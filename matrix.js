import { Cell } from "./cell.js";

export function Matrix(size) {
    let cellArr = [];
    let numRows = size, numCols = size;
    
    for(let i = 0; i < size; ++i) {
      for(let j = 0; j < size; ++j) {
        let newCell = Cell(i, j);
        cellArr.push(newCell);
      }
    }
    
    const getCell = (coords) => {
      const [x, y] = coords;
      
      for(const cell of cellArr) {
        if(cell.getRow() == x && cell.getCol() == y) return cell;
      }
    }
    
    const getMatrix = () => cellArr;
    const getNumRows = () => numRows;
    const getNumCols = () => numCols;
    const getMatrixSize = () => size;
    
    return {getMatrix, getNumRows, getNumCols, getCell, getMatrixSize}
  }