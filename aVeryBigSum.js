// FUNCTION IMPLEMENTATION :
function aVeryBigSum(ar) {
  let result = 0;
  for (let x of ar) {
    result += x;
  }
  return result;
}

// TEST CASE :
function main() {
  let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
  console.log(aVeryBigSum(ar));
}

// EXECUTE TEST CASE :
main();
