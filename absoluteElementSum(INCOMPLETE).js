// FUNCTION IMPLEMENTATION :
function playingWithNumbers(arr, queries) {
  // time limit on few cases :
  let final = new Array();
  let n = arr.length * queries.length;
  let result = 0;
  let key = queries[0];
  let k = 0;
  let j = 0;
  // for (let query of queries) {
  //   n += query;
  //   let result = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     result += Math.abs(arr[i] + n);
  //   }
  //   final.push(result);
  // }
  // return final;

  // Still time limit :
  for (let i = 0; i < n; i++) {
    result += Math.abs(arr[k] + key);
    console.log(result);
    k++;
    
    if ((i + 1) % arr.length == 0) {
      j++;
      k = 0;
      final.push(result);
      result = 0;
      key += queries[j];
    }
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
