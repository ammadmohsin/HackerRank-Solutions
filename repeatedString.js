// FUNCTION IMPLEMENTATION :
function repeatedString(s, n) {
  let len = s.length;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      count++;
    }
  }

  let noOfRepeatition = Math.floor(n / len);
  let remaining = n % len;
  let total = noOfRepeatition * count;

  for (let i = 0; i < remaining; i++) {
    if (s[i] == "a") {
      total++;
    }
  }
  return total;
}

// TEST CASE :
function main() {
  let s = "a";
  let n = 10000000000000000;
  console.log(repeatedString(s, n));
}

// EXECUTE TEST CASE :
main();
