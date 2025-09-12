// FUNCTION IMPLEMENTATION :
function xorSequence(l, r) {
  //   WAY 01 : (time limit on 10 out of 21 cases)
  let result = 0;
  for (let i = l; i <= r; i++) {
    let n = 0;
    if (i % 4 === 0) n = i;
    else if (i % 4 === 1) n = 1;
    else if (i % 4 === 2) n = i + 1;
    result ^= n;
  }
  return result;
}

// TEST CASE :
function main() {
  let l = 5;
  let r = 9;
  console.log(xorSequence(l, r));
}

// EXECUTE TEST CASE :
main();
