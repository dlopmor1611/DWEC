function solveTreasureHunt(grid) {
  let currentRow = 0;
  let currentCol = 0;
  let visited = [];

  while (true) {
    let currentValue = grid[currentRow][currentCol];
    visited.push(
      `Cell (${currentRow + 1}, ${currentCol + 1}) -> Value: ${currentValue}`,
    );

    let targetCoordinate = (currentRow + 1) * 10 + (currentCol + 1);
    if (currentValue === targetCoordinate) {
      return {
        visited,
        treasureLocation: `(${currentRow + 1}, ${currentCol + 1})`,
      };
    }

    currentRow = Math.floor(currentValue / 10) - 1;
    currentCol = (currentValue % 10) - 1;

    if (
      currentRow < 0 ||
      currentRow >= 5 ||
      currentCol < 0 ||
      currentCol >= 5
    ) {
      return { visited, treasureLocation: null, error: "Out of bounds!" };
    }
  }
}

function generateTreasureHunt(rows = 5, cols = 5) {

  let grid = Array.from({ length: rows }, () => Array(cols).fill(0));


  let tRow = Math.floor(Math.random() * rows);
  let tCol = Math.floor(Math.random() * cols);
  grid[tRow][tCol] = (tRow + 1) * 10 + (tCol + 1);

  let currR = tRow;
  let currC = tCol;

  for (let step = 0; step < (rows * cols) - 1; step++) {
    let prevR = Math.floor(Math.random() * rows);
    let prevC = Math.floor(Math.random() * cols);

    if (grid[prevR][prevC] === 0 && !(prevR === tRow && prevC === tCol)) {
      grid[prevR][prevC] = (currR + 1) * 10 + (currC + 1);
      currR = prevR;
      currC = prevC;
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 0) {
        let randR = Math.floor(Math.random() * rows) + 1;
        let randC = Math.floor(Math.random() * cols) + 1;
        grid[r][c] = randR * 10 + randC;
      }
    }
  }

  return grid;
}

console.log(generateTreasureHunt(5, 5));