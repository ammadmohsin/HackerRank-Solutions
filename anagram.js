// FUNCTION IMPLEMENTATION :
function anagram(s) {
  let n = s.length;
  if (n % 2 === 0) {
    s = s.split("");
    let mid = n / 2;
    let left = s.slice(0, mid);
    let right = s.slice(mid);
    for (let char of left) {
      for (let i = right.length - 1; i >= 0; i--) {
        if (char === right[i]) {
            right.splice(i, 1);
            break;
        }
      }
    }
    return right.length;
  }
  return -1;
}

// TEST CASE :
function main() {
  let s = "xxbbxbax";
  console.log(anagram(s));
}

// EXECUTE TEST CASE :
main();
