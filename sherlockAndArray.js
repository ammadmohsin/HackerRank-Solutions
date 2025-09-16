// FUNCTION IMPLEMENTATION :
function balancedSums(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }

  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (leftSum === total - leftSum - arr[i]) return "YES";
    leftSum += arr[i];
  }
  return "NO";
}

// TEST CASE :
function main() {
  let arr = [2, 4, 3, 1, 5];
  console.log(balancedSums(arr));
}

// EXECUTE TEST CASE :
main();
