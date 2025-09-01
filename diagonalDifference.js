// FUNCTION IMPLEMENTATION :
function diagonalDifference(arr) {
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;
  let difference = 0;

  for (let i = 0, j = arr[i].length - 1; i < arr.length; i++, j--) {
    primaryDiagonalSum += arr[i][i];
    secondaryDiagonalSum += arr[i][j];
  }

  //console.log(primaryDiagonalSum);
  //console.log(secondaryDiagonalSum);
  difference = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
  return difference;
}

// TEST CASE :
function main() {
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];

  console.log(diagonalDifference(arr));
}

// EXECUTE TEST CASE :
main();
