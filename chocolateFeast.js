// FUNCTION IMPLEMENTATION :
function chocolateFeast(n, c, m) {
  let chocEaten = Math.floor(n / c);
  let w = chocEaten;

  while (w >= m) {
    let wLeft = w % m;
    let wTurnedIn = w - wLeft;
    let chocGot = wTurnedIn / m;
    w = chocGot + wLeft;
    chocEaten += chocGot;
  }
  return chocEaten;
}

// TEST CASE :
function main() {
  let result = chocolateFeast(15, 3, 2);
  console.log(result);
}

// EXECUTE TEST CASE :
main();
