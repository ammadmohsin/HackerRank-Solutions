// FUNCTION IMPLEMENTATION :
function twoArrays(k, A, B) {
  // WAY 1 : (fails 2 out of 11 cases)(removing multiple elements)
  for (let x of A) {
    for (let i = B.length - 1; i >= 0; i--) {
      if (x + B[i] >= k) {
        B.splice(i, 1);
      }
    }
  }
  return B.length == 0 ? "YES" : "NO";

  // WAY 2 : (Correct way)
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      return "NO";
    }
  }
  return "YES";
}

// TEST CASE :
function main() {
  let A = [1, 2, 2, 1];
  let B = [3, 3, 3, 4];
  let k = 10;
  console.log(twoArrays(k, A, B));
}

// EXECUTE TEST CASE :
main();
