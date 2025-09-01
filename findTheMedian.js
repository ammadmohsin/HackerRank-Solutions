// FUNCTION IMPLEMENTATION :
function findMedian(arr) {
  //   arr.sort(); (it wont work because it compares as a string and not as numbers. It compares lexicographically.)
  // WAY ONE : (WORKS FINE BUT ALOT OF WORK)
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
    //   console.log(arr.join(" "));
  }

  // WAY TWO : (MORE PRECISE AND EASY WAY)
  arr.sort((a, b) => a - b); // it will now sort the values by considering them as numbers. where a = a[i] and b = a[i+1]
  let median = Math.floor(n / 2);
  return arr[median];
}

// TEST CASE :
function main() {
  // let arr = [5, 3, 1, 2, 4];
  let arr = [0, 1, 2, 4, 6, 5, 3];
  console.log(findMedian(arr));
}

// EXECUTE TEST CASE :
main();
