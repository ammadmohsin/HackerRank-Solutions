// FUNCTION IMPLEMENTATION :
function permutationEquation(p) {
  let n = p.length;
  let firstArr = new Array();
  let secondArr = new Array();
  for (let i = 1; i <= n; i++) {
    firstArr.push(p.indexOf(i) + 1);
  }

  for (let x of firstArr) {
    secondArr.push(p.indexOf(x) + 1);
  }
  return secondArr;
}

// TEST CASE :
function main() {
  // let p = [2, 3, 1];
  let p = [4, 3, 5, 1, 2];
  console.log(permutationEquation(p));
}

// EXECUTE TEST CASE :
main();
