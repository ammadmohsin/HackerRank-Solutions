// FUNCTION IMPLEMENTATION :
function utopianTree(n) {
  let h = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 1) {
      h *= 2;
    } else {
      h++;
    }
  }
  return h;
}

// TEST CASE :
function main() {
  // let n = 0;
  // let n = 1;
  let n = 4;
  console.log(utopianTree(n));
}

// EXECUTE TEST CASE :
main();
