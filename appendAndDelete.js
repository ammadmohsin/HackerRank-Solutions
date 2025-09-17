// FUNCTION IMPLEMENTATION :
function appendAndDelete(s, t, k) {
  let commonLength = 0;
  let n = Math.min(s.length, t.length);

  for (let i = 0; i < n; i++) {
    if (s[i] === t[i]) {
      commonLength++;
    } else {
      break;
    }
  }

  let result = s.length - commonLength + (t.length - commonLength);
  return result > k ? "No" : "Yes";
}

// TEST CASE :
function main() {
  let s = "abc";
  let t = "abc";
  let k = 6;
  console.log(appendAndDelete(s, t, k));
}

// EXECUTE TEST CASE :
main();
