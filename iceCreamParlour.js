// FUNCTION IMPLEMENTATION :
function icecreamParlor(m, arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let diff = arr[i] + arr[j];
      if (diff == m) {
        return [i + 1, j + 1];
      }
    }
  }
}

// TEST CASE :
function main() {
  let m = 4;
  let arr1 = [2, 2, 4, 3];
  let arr2 = [1, 4, 5, 3, 2];
  console.log(icecreamParlor(m, arr2));
}

// EXECUTE TEST CASE :
main();
