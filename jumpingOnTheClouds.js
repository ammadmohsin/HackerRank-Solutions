// FUNCTION IMPLEMENTATION :
function jumpingOnClouds(c) {
  let count = 0;
  let n = c.length;
  let n_1 = c.length - 1;
  let i = 0;

  while (i < n_1) {
    if (i + 2 < n && c[i + 2] == 0) {
      i += 2;
    } else {
      i += 1;
    }
    count++;
  }
  return count;
}

// TEST CASE :
function main() {
  let c = [0, 0, 1, 0, 0, 1, 0];
  console.log(jumpingOnClouds(c));
}

// EXECUTE TEST CASE :
main();
