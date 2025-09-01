// FUNCTION IMPLEMENTATION :
function miniMaxSum(arr) {
  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);

  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log(sum - maxValue + " " + (sum - minValue));
}

// TEST CASE :
function main() {
  let arr = [1, 2, 3, 4, 5];
  miniMaxSum(arr);
}

// EXECUTE TEST CASE :
main();
