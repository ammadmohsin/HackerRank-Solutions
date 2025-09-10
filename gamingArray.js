// FUNCTION IMPLEMENTATION :
function gamingArray(arr) {
  let count = 0;

  // WAY 1 : (time limit on 3 out of 21 cases)
  while (arr.length > 0) {
    let max = Math.max(...arr);
    arr = arr.slice(0, arr.indexOf(max));
    count++;
  }

  // WAY 2 : (Correct way)
  let currentMax = -Infinity;
  for (let num of arr) {
    if (num > currentMax) {
      currentMax = num;
      count++;
    }
  }
  return count % 2 === 0 ? "ANDY" : "BOB";
}

// TEST CASE :
function main() {
  let arr1 = [2, 3, 5, 4, 1];
  let arr2 = [5, 2, 6, 3, 4];
  let arr3 = [3, 1];
  console.log(gamingArray(arr3));
}

// EXECUTE TEST CASE :
main();
