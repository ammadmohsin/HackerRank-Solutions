// FUNCTION IMPLEMENTATION :
function pageCount(n, p) {
  let frontCount = Math.floor(p / 2);
  let backCount = Math.floor(n / 2) - Math.floor(p / 2);

  return Math.min(frontCount, backCount);
}

// TEST CASE :
function main() {
    let n = 6;
    let p = 2;
    console.log(pageCount(n, p));
}

// EXECUTE TEST CASE :
main();
