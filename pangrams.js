// FUNCTION IMPLEMENTATION :
function pangrams(s) {
  s = s.toLowerCase();
  let arr = new Array();

  for (let char of s) {
    if (char >= "a" && char <= "z" && !arr.includes(char)) {
      arr.push(char);
    }
  }

  return arr.length === 26 ? "pangram" : "not pangram";
}

// TEST CASE :
function main() {
  let s = "We promptly judged antique ivory buckles for the next prize";
  console.log(pangrams(s));
}

// EXECUTE TEST CASE :
main();
