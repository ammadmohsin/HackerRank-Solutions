// FUNCTION IMPLEMENTATION :
function maximizingXor(l, r) {
  let max = -Infinity;
  let result = 0;
  for (let i = l; i <= r; i++) {
    for (let j = i; j <= r; j++) {
      result = i ^ j;
      if (max < result) {
        max = result;
      }
    }
  }
  return max;
}

// TEST CASE :
function main() {
  let l = 10;
  let r = 15;
  console.log(maximizingXor(l, r));
}

// EXECUTE TEST CASE :
main();
