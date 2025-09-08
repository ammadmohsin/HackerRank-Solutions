// FUNCTION IMPLEMENTATION :
function missingNumbers(arr, brr) {
  arr.sort((a, b) => (a - b));
  brr.sort((a, b) => a - b);

  for (let x of arr) {
    for (let i = brr.length-1; i >= 0; i--) {
      if (x == brr[i]) {
        brr.splice(i, 1);
        break;
      }
    }
  }
  return [...new Set(brr)]; // Removes the repeating numbers.
}

// TEST CASE :
function main() {
  let arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
  let brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204,206];
  console.log(missingNumbers(arr, brr));
}

// EXECUTE TEST CASE :
main();
