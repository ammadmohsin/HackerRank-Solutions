// FUNCTION IMPLEMENTATION :
function jumpingOnClouds(c, k) {
  let n = c.length;
  let energyLevel = 100;
  let cloud;
  let i = 0;

  do {
    cloud = (i + k) % n;
    if (c[cloud] == 0) {
      energyLevel -= 1;
    } else {
      energyLevel -= 3;
    }
    i = cloud;
  } while (cloud != 0);

  return energyLevel;
}

// TEST CASE :
function main() {
  let k = 3;
  //  let c = [0, 0, 1, 0, 0, 1, 1, 0];
  let c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];

  console.log(jumpingOnClouds(c, k));
}

// EXECUTE TEST CASE :
main();
