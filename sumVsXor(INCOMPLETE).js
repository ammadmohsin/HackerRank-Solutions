// FUNCTION IMPLEMENTATION :
function sumXor(n) {
  // Time limit for 5 out of 12 cases
  let count = 0;
  for (let i = 0; i < n; i++) {
    if ((n + i) == (n ^ i)) {
      count++;
    }
  }
  return count;
}

// TEST CASE :
function main() {
  let n = 4;
  console.log(sumXor(n));
}

// EXECUTE TEST CASE :
main();
