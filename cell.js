export function Cell(x, y, visited=false) {  
  const getRow = () => x;
  const getCol = () => y;
  const isVisited = () => visited;
  const setVisited = (status) => {visited = status};
  
  return {getRow, getCol, isVisited, setVisited};
}