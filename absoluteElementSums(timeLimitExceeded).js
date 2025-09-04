// FUNCTION IMPLEMENTATION :
function playingWithNumbers(arr, queries) {
  let final = new Array();
  let n = 0;
  for (let query of queries) {
    n += query;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += Math.abs(arr[i] + n);
    }
    final.push(result);
  }
  return final;
}

// TEST CASE :
function main() {
  let arr = [-1, 2, -3];
  let queries = [1, -2, 3];
  console.log(playingWithNumbers(arr, queries));
}

// EXECUTE TEST CASE :
main();
