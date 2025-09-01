// FUNCTION IMPLEMENTATION :
function libraryFine(d1, m1, y1, d2, m2, y2) {
  let fine;

  if (y2 == y1) {
    if (m2 == m1) {
      if (d2 == d1) {
        fine = 0;
      } else if (d2 > d1) {
        fine = 0;
      } else {
        fine = (d1 - d2) * 15;
      }
    } else if (m2 > m1) {
      fine = 0;
    } else {
      fine = (m1 - m2) * 500;
    }
  } else if (y2 > y1) {
    fine = 0;
  } else {
    fine = 10000;
  }

  return fine;
}

// TEST CASE :
function main() {
  let d1 = 9,
    m1 = 6,
    y1 = 2015;
  let d2 = 6,
    m2 = 6,
    y2 = 2015;

  console.log(libraryFine(d1, m1, y1, d2, m2, y2));
}

// EXECUTE TEST CASE :
main();
