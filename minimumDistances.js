// FUNCTION IMPLEMENTATION :
function minimumDistances(a) {
  let min = Infinity;

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] == a[j]) {
        let d = j - i;
        if (d < min) {
          min = d;
        }
      }
    }
  }
  return min == Infinity ? -1 : min;
}

// TEST CASE :
function main() {
    let arr = [7, 1, 3, 4, 1, 7];
    console.log(minimumDistances(arr));
}

// EXECUTE TEST CASE :
main();
