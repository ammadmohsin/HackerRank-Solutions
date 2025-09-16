// FUNCTION IMPLEMENTATION :
function makingAnagrams(s1, s2) {
  s1 = s1.split("");
  s2 = s2.split("");

  for (let i = s1.length - 1; i >= 0; i--) {
    for (let j = s2.length - 1; j >= 0; j--) {
      if (s1[i] === s2[j]) {
        s1.splice(i, 1);
        s2.splice(j, 1);
        break;
      }
    }
  }
  return s2.length + s1.length;
}

// TEST CASE :
function main() {
  let s1 = "abc";
  let s2 = "cde";
  console.log(makingAnagrams(s1, s2));
}

// EXECUTE TEST CASE :
main();
