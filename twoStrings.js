// FUNCTION IMPLEMENTATION :
function twoStrings(s1, s2) {
  let count = 0;
  for (let char of s1) {
    if (s2.includes(char)) {
      count++;
    }
  }
  return count > 0 ? "YES" : "NO";
}

// TEST CASE :
function main() {
  let s1 = "hello";
  let s2 = "world";
  console.log(twoStrings(s1, s2));
}

// EXECUTE TEST CASE :
main();
