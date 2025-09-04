// FUNCTION IMPLEMENTATION :
function lonelyinteger(a) {
  let arr = new Array(100).fill(0);
  for (let x of a) {
    arr[x]++;
  }
  for (let x of arr) {
    if (x === 1) {
      return arr.indexOf(x);
    }
  }
}

// TEST CASE :
function main() {
  let a1 = [1, 2, 3, 4, 3, 2, 1];
  let a2 = [1, 1, 2];
  console.log(lonelyinteger(a2));
}

// EXECUTE TEST CASE :
main();
