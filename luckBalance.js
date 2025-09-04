// FUNCTION IMPLEMENTATION :
function luckBalance(k, contests) {
  let n = contests.length;
  let luck = 0;
  contests.sort((a, b) => b[0] - a[0]);
  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] == 0) {
      luck += contests[i][0];
    } else {
      if (k > 0) {
        luck += contests[i][0];
        k--;
      } else {
        luck -= contests[i][0];
      }
    }
  }
  return luck;
}

// TEST CASE :
function main() {
  let k = 3;
  let contests = [
    [5, 1],
    [2, 1],
    [1, 1],
    [8, 1],
    [10, 0],
    [5, 0],
  ];

  console.log(luckBalance(k, contests));
}

// EXECUTE TEST CASE :
main();
