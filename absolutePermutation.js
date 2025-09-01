// FUNCTION IMPLEMENTATION :
function absolutePermutation(n, k) {
  let arr = [];
  let permutation = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let val = Math.abs(arr[j - 1] - i);
      if (val == k) {
        permutation.push(arr[j - 1]);
        break;
      }
    }
  }
  if (arr.length == permutation.length) {
    return permutation;
  } else {
    return [-1];
  }
}

// TEST CASE :
function main() {
  let n = 3;
  let k = 2;
  console.log(absolutePermutation(n, k));
}

// EXECUTE TEST CASE :
main();
