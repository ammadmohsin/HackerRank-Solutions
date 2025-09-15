// FUNCTION IMPLEMENTATION :
function sumXor(n) {
  // WAY 01 : (Time limit for 5 out of 12 cases)
  //   let count = 0;
  //   for (let i = 0; i < n; i++) {
  //     if ((n + i) == (n ^ i)) {
  //       count++;
  //     }
  //   }
  //   return count;

  // WAY 02 : (correct way by using logic of XOR and OR property) (if binary = 0; that means xor and or are equal.)
  if (n === 0) return 1;
  let bin = n.toString(2); // binary string
  let zeros = 0;
  for (let ch of bin) {
    if (ch === "0") zeros++;
  }
  return 2 ** zeros;
}

// TEST CASE :
function main() {
  let n = 4;
  console.log(sumXor(n));
}

// EXECUTE TEST CASE :
main();
