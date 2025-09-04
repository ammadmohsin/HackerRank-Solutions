// FUNCTION IMPLEMENTATION :
function pairs(k, arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (k === Math.abs(arr[i] - arr[j])) {
        count++;
      }
    }
  }
  return count;
}

// TEST CASE :
function main() {
  let k = 1;
  let arr1 = [1, 5, 3, 4, 2];
  let arr2 = [1, 2, 3, 4];
  console.log(pairs(k, arr2));
}

// EXECUTE TEST CASE :
main();
