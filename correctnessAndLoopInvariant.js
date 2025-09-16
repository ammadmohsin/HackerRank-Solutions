//FUNCTION IMPLEMENTATION :
function insertionSort(n, arr) {
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
  console.log(arr.join(" "));
  //  NOTE : If this code doesn't work,
  //  simply copy the whole code of Insertion Sort 2 from hacker Rank and paste it.
}

// TEST CASE :
function main() {}

// EXECUTE TEST CASE :
main();
