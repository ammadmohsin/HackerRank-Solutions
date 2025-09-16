// FUNCTION IMPLEMENTATION :
function equalizeArray(arr) {
  let result = 0;
  let Arr = new Array(101).fill(0);
  for (let num of arr) {
    Arr[num]++;
  }
  let max = Math.max(...Arr);
  // {//(approach is fine but its deleting the same numbers too.
  //  // like there are two 5'ss and also two 3's so they both will be not added)
  //     for (let num of Arr) {
  //         if (num != max) {
  //             result += num;
  //         }
  //     }
  //    return result
  // }

  // CORRECT WAY :
  return arr.length - max;
}

// TEST CASE :
function main() {
  let arr = [1, 2, 2, 3];
  console.log(equalizeArray(arr));
}

// EXECUTE TEST CASE :
main();
