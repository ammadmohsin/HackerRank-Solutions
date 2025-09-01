// FUNCTION IMPLEMENTATION :
function beautifulDays(i, j, k) {
  let count = 0;
  let result = 0;
  for (let a = i; a <= j; a++) {
    result = a - Number(a.toString().split("").reverse().join(""));
    result /= k;
    if (result % 1 == 0) {
      count++;
    }
  }
  return count;
}

// TEST CASE :
function main() {
  let i = 20,
    j = 23,
    k = 6;
  console.log(beautifulDays(i, j, k));
}

// EXECUTE TEST CASE :
main();
