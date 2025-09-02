// FUNCTION IMPLEMENTATION :
function missingNumbers(arr, brr) {
  for (let x of arr) {
    for (let i = 0; i < brr.length; i++) {
      if (x == brr[i]) {
        brr.splice(i, 1);
        break;
      }
    }
  }
  brr.sort((a, b) => a - b);
  return brr;
}

// TEST CASE :
function main() {
  let arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
  let brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
  console.log(missingNumbers(arr, brr));
}

// EXECUTE TEST CASE :
main();
