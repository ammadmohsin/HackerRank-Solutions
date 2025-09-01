// FUNCTION IMPLEMENTATION :
function migratoryBirds(arr) {
  let n = arr.length;
  let types = new Array(5).fill(0);

  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < n; j++) {
      if (i == arr[j]) {
        types[i - 1] += 1;
      }
    }
  }

  let birdType = 0;
  let max = 0;
  for (let i = 0; i < 5; i++) {
    if (types[i] > max) {
      max = types[i];
      birdType = i + 1;
    }
  }

  return birdType;
}

// TEST CASE :
function main() {
  let arr = [1, 4, 4, 4, 5, 3];
  console.log(migratoryBirds(arr));
}

// EXECUTE TEST CASE :
main();
