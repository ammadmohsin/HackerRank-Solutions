// FUNCTION IMPLEMENTATION :
function hurdleRace(k, height) {
  let max = Math.max(...height);
  let noOfPotion = max - k;

  if (noOfPotion <= 0) {
    return 0;
  } else return noOfPotion;
}

// TEST CASE :
function main() {
  let k = 4;
  let height = [1, 6, 3, 5, 2];

  console.log(hurdleRace(k, height));
}

// EXECUTE TEST CASE :
main();
