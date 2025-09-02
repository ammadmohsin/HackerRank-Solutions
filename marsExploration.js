// FUNCTION IMPLEMENTATION :
function marsExploration(s) {
  let count = 0;

  for (let i = 0; i < s.length; i += 3) {
    if (s[i] !== "S") count++;
    if (s[i + 1] !== "O") count++;
    if (s[i + 2] !== "S") count++;
  }
  return count;
}

// TEST CASE :
function main() {
  let s = "SOSSPSSQSSOR";
  console.log(marsExploration(s));
}

// EXECUTE TEST CASE :
main();
