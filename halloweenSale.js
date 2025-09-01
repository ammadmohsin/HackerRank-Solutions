// FUNCTION IMPLEMENTATION :
function howManyGames(p, d, m, s) {
  let bill = 0;
  let count = 0;

  while (bill + p <= s) {
    bill += p;
    count++;

    if (p - d >= m) {
      p -= d;
    } else {
      p = m;
    }
  }
  return count;
}

// TEST CASE :
function main() {
  let p = 20,
    d = 3,
    m = 6,
    s = 85;
  console.log(howManyGames(p, d, m, s));
}

// EXECUTE TEST CASE :
main();
