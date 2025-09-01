// FUNCTION IMPLEMENTATION :
function extraLongFactorials(n) {
  n = BigInt(n); // using BigInt() bcz big numbers cant be hold in Numbers category.
  if (n == 1n || n == 0n) {
    return 1n;
  }
  return n * extraLongFactorials(n - 1n);
}

// TEST CASE :
function main() {
  let n = 25;
  console.log(extraLongFactorials(n));
}

// EXECUTE TEST CASE :
main();
