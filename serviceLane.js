// FUNCTION IMPLEMENTATION :
function serviceLane(width, cases) {
  let arr = new Array();
  for (let i = 0; i < cases.length; i++) {
    let x = width.slice(cases[i][0], cases[i][1] + 1);
    arr.push(Math.min(...x));
  }
  return arr;
}

// TEST CASE :
function main() {
  let n = 8,
    t = 5;
  let width = [2, 3, 1, 2, 3, 2, 3, 3];
  let cases = [
    [0, 3],
    [4, 6],
    [6, 7],
    [3, 5],
    [0, 7],
  ];
  console.log(serviceLane(width, cases));
}

// EXECUTE TEST CASE :
main();
