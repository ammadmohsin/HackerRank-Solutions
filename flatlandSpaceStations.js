// FUNCTION IMPLEMENTATION :
function flatlandSpaceStations(n, c) {
  let dist = new Array();
  for (let i = 0; i < n; i++) {
    let sampleArr = new Array();
    for (let x of c) {
      sampleArr.push(Math.abs(i - x));
    }
    dist.push(Math.min(...sampleArr));
  }
  return Math.max(...dist);
}

// TEST CASE :
function main() {
  console.log(flatlandSpaceStations(5, [0, 4]));
  console.log(flatlandSpaceStations(6, [0, 1, 3, 2, 5, 4]));
}

// EXECUTE TEST CASE :
main();
