// FUNCTION IMPLEMENTATION :
function circularArrayRotation(a, k, queries) {
  let removed;
  for (let i = 0; i < k; i++) {
    removed = a.pop();
    a.unshift(removed);
  }
  return queries.map((query) => a[query]);
}

// TEST CASE :
function main() {
  console.log("Circular Array Rotation");
  let result = circularArrayRotation([1, 2, 3], 2, [0, 1, 2]);
  console.log(result); // Output: [2, 3, 1]
}

// EXECUTE TEST CASE :
main();
