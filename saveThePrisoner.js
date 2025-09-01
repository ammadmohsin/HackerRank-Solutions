// FUNCTION IMPLEMENTATION :
function saveThePrisoner(n, m, s) {
  return ((s - 1 + m - 1) % n) + 1;
}

// TEST CASE :
function main() {
  let n = 5;
  let m = 2;
  let s = 1;
  console.log(saveThePrisoner(n, m, s));
}

// EXECUTE TEST CASE :
main();
