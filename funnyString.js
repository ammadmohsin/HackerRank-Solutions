// FUNCTION IMPLEMENTATION :
function funnyString(s) {
  let a = new Array();
  let r = new Array();
  let count = 0;
  for (let char in s) {
    a.push(s.charCodeAt(char));
    r.unshift(s.charCodeAt(char));
  }
  for (let i = a.length - 1; i > 0; i--) {
    if (Math.abs(a[i] - a[i - 1]) == Math.abs(r[i] - r[i - 1])) {
      count++;
    }
  }
  return count == a.length - 1 ? "Funny" : "Not Funny";
}

// TEST CASE :
function main() {
  let s = "acxz";
  let c = "bcxz";
  console.log(funnyString(s));
}

// EXECUTE TEST CASE :
main();
