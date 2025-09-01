// FUNCTION IMPLEMENTATION :
function simpleArraySum(ar) {
  let result = 0;
  for (let num of ar) {
    result += num;
  }
  return result;
}

// TEST CASE :
function main() {
    let arr = [1, 2, 3, 4, 10, 11];
    console.log(simpleArraySum(arr));
}

// EXECUTE TEST CASE :
main();
