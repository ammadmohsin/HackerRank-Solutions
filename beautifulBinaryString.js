// FUNCTION IMPLEMENTATION :
function beautifulBinaryString(b) {
  let n = b.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (b[i] == 0) {
      if (b[i + 1] == 1 && b[i + 2] == 0) {
        count++;
        i += 2;
      }
    }
  }
  return count;
}

// TEST CASE :
function main() {
  let a = "0101010";
  let b = "01100";
  let c = "0100101010";
  console.log(beautifulBinaryString(c));
}

// EXECUTE TEST CASE :
main();
