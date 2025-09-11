// FUNCTION IMPLEMENTATION :
function counterGame(n) {
  let count = 0;
  let square = 0;
  if (n != 1) {
    while (n != 1) {
      for (let i = 1; i < n; i *= 2) {
        square = i;
      }
      if (square * 2 == n) {
        n /= 2;
      } else {
        n -= square;
      }
      count++;
    }
    if (count % 2 == 0) {
      return "Richard";
    } else {
      return "Louise";
    }
  }
  return "Richard";
}

// TEST CASE :
function main() {
  let n = 6;
  console.log(counterGame(n));
}

// EXECUTE TEST CASE :
main();
