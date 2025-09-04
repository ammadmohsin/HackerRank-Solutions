// FUNCTION IMPLEMENTATION :
function gridlandMetro(n, m, k, track) {
  let totalBoxes = n * m;
  let coveredBoxes = 0;
  for (let i = 0; i < track.length; i++) {
    coveredBoxes += track[i][2] - track[i][1] + 1;
  }
  return totalBoxes - coveredBoxes;
}

// TEST CASE :
function main() {
  let n = 4;
  let m = 4;
  let k = 4;
  let track1 = [
    [2, 2, 3],
    [3, 1, 4],
    [4, 4, 4],
  ];

  let track2 = [
    [1, 1, 4],
    [2, 2, 4],
    [3, 1, 2],
    [4, 2, 3],
  ];

  console.log(gridlandMetro(n, m, k, track2));
}

// EXECUTE TEST CASE :
main();
