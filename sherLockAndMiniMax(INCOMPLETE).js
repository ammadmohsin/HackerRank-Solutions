// FUNCTION IMPLEMENTATION :
function sherlockAndMinimax(arr, p, q) { // Fails 3 out of 11 cases due to high memory consumption. 
  let min = Infinity;
  let result = new Array();
  for (let i = p; i <= q; i++) {
    for (let num of arr) {
      min = Math.min(min, Math.abs(num - i));
    }
    result.push([i, min]);
    min = Infinity;
  }
  result.sort((a, b) => b[1] - a[1]);
  let i = 0;
  min = Infinity;
  do {
    min = Math.min(min, result[i][0]);
      i++;
  } while (result[i][1] == result[i - 1][1]);
  return min;
}

// TEST CASE :
function main() {
  // let arr = [3, 5, 7, 9];
  let arr = [5, 8, 14];
  let p = 4;
  let q = 9;
  let result = sherlockAndMinimax(arr, p, q);
  console.log(result);
}

// EXECUTE TEST CASE :
main();
