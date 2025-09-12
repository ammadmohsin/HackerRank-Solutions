// FUNCTION IMPLEMENTATION :
function theGreatXor(x) {
  // WAY 01 : (time limit on 4 out of 11 cases)
  //   let count = 0;
  //   for (let i = 1; i < x; i++) {
  //     if ((i ^ x) > x) {
  //       count++;
  //     }
  //   }
  //   return count;

  // WAY 02 : (Correct way by applying a property of XOR)
  // XOR property : (all numbers less than the next power of 2) − (all numbers less than or equal to x)
  let pow = 1;
  while (pow <= x) {
    pow *= 2;
  }
  return pow - x - 1;
}

// TEST CASE :
function main() {
  let n = 10;
  console.log(theGreatXor(n));
}

// EXECUTE TEST CASE :
main();
