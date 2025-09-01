// FUNCTION IMPLEMENTATION :
function birthday(s, d, m) {
  let ways = 0;
  let n = s.length;
  let loop = n - m;

  for (let i = 0; i <= loop; i++) {
    let bDay = 0;
    for (let j = i; j < m; j++) {
      bDay += s[j];
    }
    if (bDay == d) {
      ways++;
    }
    m++;
  }
  return ways;
}

// TEST CASE :
function main() {
    let s = [1, 2, 1, 3, 2];
    let d = 3;
    let m = 2;

    console.log(birthday(s,d,m));
}

// EXECUTE TEST CASE :
main();
