// FUNCTION IMPLEMENTATION :
function minimumAbsoluteDifference(arr) {
  let newArray = new Array();
  let min = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) < min) {
        min = Math.abs(arr[i] - arr[j]);
      }
    }
  }
  return min;
}

// TEST CASE :
function main() {
  let arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
  console.log(minimumAbsoluteDifference(arr));
}

// EXECUTE TEST CASE :
main();
