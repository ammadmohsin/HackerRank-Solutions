// FUNCTION IMPLEMENTATION :
function gameOfStones(n) {
  let firstWin = 0;
  let secondWin = 0;

  if (n == 2 || n == 3 || n == 5) {
    return "First";
  } else if (n > 1) {
    if (n % 2 <= 1) {
      firstWin++;
    } else {
      secondWin++;
    }
    if (n % 3 <= 1) {
      firstWin++;
    } else {
      secondWin++;
    }
    if (n % 5 <= 1) {
      firstWin++;
    } else {
      secondWin++;
    }
  } else {
    secondWin++;
  }

  return firstWin > secondWin ? "First" : "Second";
}

// TEST CASE :
function main() {
  let n = [1, 2, 3, 4, 5, 6, 7, 10];
  for (let x of n) {
    console.log(gameOfStones(x));
  }
}

// EXECUTE TEST CASE :
main();
