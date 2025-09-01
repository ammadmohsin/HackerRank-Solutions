// FUNCTION IMPLEMENTATION :
function catAndMouse(x, y, z) {
  let A = "Cat A",
    B = "Cat B",
    C = "Mouse C";
  let distA = Math.abs(z - x),
    distB = Math.abs(z - y);

  if (distA < distB) {
    return A;
  } else if (distA > distB) {
    return B;
  } else {
    return C;
  }
}

// TEST CASE :
function main() {
  // let x = 1, y = 2, z = 3;
  let x = 1,
    y = 3,
    z = 2;

  console.log(catAndMouse(x, y, z));
}

// EXECUTE TEST CASE :
main();
