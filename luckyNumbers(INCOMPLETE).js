// FUNCTION IMPLEMENTATION :
function luckyNumbers(a, b) {
  // WAY 1 : (too much time consuming. Fails 8 out of 10 cases due to time limit)
  let sum;
  let squareSum;
  let count = 0;
  for (let i = a; i <= b; i++) {
    let num = i;
    sum = 0;
    squareSum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit;
      squareSum += digit * digit;
      num = Math.floor(num / 10);
    }
    if (
      (sum % 2 == 0 ||
        sum % 3 == 0 ||
        sum % 5 == 0 ||
        sum % 7 == 0 ||
        sum % 11 == 0) &&
      (squareSum % 2 == 0 ||
        squareSum % 3 == 0 ||
        squareSum % 5 == 0 ||
        squareSum % 7 == 0 ||
        squareSum % 11 == 0)
    ) {
      continue;
    } else {
      count++;
    }
  }
  return count;
}

// TEST CASE :
function main() {
  let a = 120;
  let b = 130;
  console.log(luckyNumbers(a, b));
}

// EXECUTE TEST CASE :
main();
