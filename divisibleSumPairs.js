// FUNCTION IMPLEMENTATION :
function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k == 0) {
        count++;
      }
    }
  }
  return count;
}

// TEST CASE :
function main() {
    let n = 6;
    let k = 3;
    let ar = [1, 3, 2, 6, 1, 2];

    console.log(divisibleSumPairs(n, k, ar));
}

// EXECUTE TEST CASE :
main();
