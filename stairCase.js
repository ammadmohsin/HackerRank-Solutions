// FUNCTION IMPLEMENTATION :
function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).padStart(n));
    //      "#"".repeat(i) : Creates string of # of length i. If length = 3, it wil be "###";
    //      ".padStart(n)" makes the string of length n by adding the remaining space at starting.
  }
}

// TEST CASE :
function main() {
  let n = 4;
  staircase(n);
}

// EXECUTE TEST CASE :
main();
