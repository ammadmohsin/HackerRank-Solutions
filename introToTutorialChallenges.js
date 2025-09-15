// FUNCTION IMPLEMENTATION :
function introTutorial(V, arr) {
  return arr.indexOf(V);

  // OR (just for fun) :
  for (let x in arr) {
    if (arr[x] == V) {
      return x;
    }
  }
}

// TEST CASE :
function main() {
  let arr = [2, 3, 7, 4, 5, 6, 1];
  let V = 5;
  console.log(introTutorial(V, arr));
}

// EXECUTE TEST CASE :
main();
