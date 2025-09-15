// FUNCTION IMPLEMENTATION :
function workbook(n, k, arr) {
  // WAY 01 : (Correct but too much time consuming. No answers given due to time limit exceeded.)
  //   let page = 1;
  //   let count = 0;

  //   for (let i = 0; i < n; i++) {
  //     let noOfProblems = arr[i];
  //     for (let j = 1; j <= noOfProblems; i++) {
  //       if (j == page) {
  //         count++;
  //       }
  //       if (j % k == 0 || j == noOfProblems) {
  //         page++;
  //       }
  //     }
  //   }

  //WAY 02 : (Short and working way) (instead of checking every single problem.. we covering all k problems at once)
  let page = 1;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let noOfProblems = arr[i];

    // Each page can hold up to k problems
    for (let start = 1; start <= noOfProblems; start += k) {
      let end = Math.min(start + k - 1, noOfProblems);

      // check if current page number is in the range [start, end]
      if (page >= start && page <= end) {
        count++;
      }
      page++;
    }
  }
  return count;
}

// TEST CASE :
function main() {
  let arr = [4, 2, 6, 1, 10];
  let n = 5;
  let k = 3;

  console.log(workbook(n, k, arr));
}

// EXECUTE TEST CASE :
main();
