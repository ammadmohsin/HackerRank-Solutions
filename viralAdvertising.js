// FUNCTION IMPLEMENTATION :
function viralAdvertising(n) {
  let shared = 0;
  let liked = 1.66666666667;
  let cumulative = 0;

  for (let i = 1; i <= n; i++) {
    shared = liked * 3;
    liked = Math.floor(shared / 2);
    cumulative += liked;
  }
  return cumulative;
}

// TEST CASE :
function main() {
  let n = 5;
  console.log(viralAdvertising(n));
}

// EXECUTE TEST CASE :
main();
