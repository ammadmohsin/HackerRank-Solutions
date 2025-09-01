// FUNCTION IMPLEMENTATION :
function findDigits(n) {
  let count = 0;
  let stringN = n.toString().split("");

  for (let x of stringN) {
    if (n % Number(x) == 0) {
      count++;
    }
  }
  return count;
}

// TEST CASE :
function main() {
  // let n = 12;
  let n = 1012;
  console.log(findDigits(n));
}

// EXECUTE TEST CASE :
main();
