// FUNCTION IMPLEMENTATION :
function cutTheSticks(arr) {
  let count;
  let sampleArr = new Array();
  while (arr.length > 0) {
    count = 0;
    let n = Math.min(...arr);
    for (let i = arr.length - 1; i >= 0; i--) {
      if (n == arr[i]) {
        arr.splice(i, 1);
        count++;
      } else {
        arr[i] -= n;
        count++;
      }
    }
    sampleArr.push(count);
  }
  return sampleArr;
}

// TEST CASE :
function main() {
  // let arr = [5, 4, 4, 2, 2, 8];
  let arr = [1, 2, 3, 4, 3, 3, 2, 1];
  console.log(cutTheSticks(arr));
}

// EXECUTE TEST CASE :
main();
