// FUNCTION IMPLEMENTATION :
function hackerrankInString(s) {
  let target = "hackerrank";
  let j = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === target[j]) {
      j++;
    }
    if (j === target.length) {
      return "YES";
    }
  }
  return "NO";
}

// TEST CASE :
function main() {
  let s1 = "hereiamstackerrank";
  let s2 = "hackerworld";
  console.log(hackerrankInString(s2));
}

// EXECUTE TEST CASE :
main();
