// FUNCTION IMPLEMENTATION :
function cavityMap(grid) {
  grid = grid.map((row) => row.split("")); // to convert the 1D array into 2D array. ("1112" => ["1","1","1","2"])

  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      if (
        grid[i][j] > grid[i - 1][j] &&
        grid[i][j] > grid[i + 1][j] &&
        grid[i][j] > grid[i][j + 1] &&
        grid[i][j] > grid[i][j - 1]
      ) {
        grid[i][j] = "X";
      }
    }
  }
  return grid.map((row) => row.join("")); // Convert it back to 1D array.
}

// TEST CASE :
function main() {
  let grid = ["1112", "1912", "1892", "1234"];
  console.log(cavityMap(grid));
}

// EXECUTE TEST CASE :
main();
