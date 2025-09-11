// FUNCTION IMPLEMENTATION :
function fibonacciModified(t1, t2, n) {
    
    let nextTerm = BigInt(0);
  for (let i = 2; i < n; i++) {
    nextTerm = t1 + t2 * t2;
    t1 = t2;
    t2 = nextTerm;
  }
  return nextTerm;
}

// TEST CASE :
function main() {
  let t1 = 0;
  let t2 = 1;
  let n = 5;
  console.log(fibonacciModified(t1, t2, n));
}

// EXECUTE TEST CASE :
main();
