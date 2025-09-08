// FUNCTION IMPLEMENTATION :
function insertionSort(arr) {
  let n = arr.length;
  let shifts = 0;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
      shifts++;
    }

    arr[j + 1] = key;
  }
  return shifts;
}

// TEST CASE :
function main() {
  let arr = [2, 1, 3, 1, 2];
  console.log(runningTime(arr));
}

// EXECUTE TEST CASE :
main();
