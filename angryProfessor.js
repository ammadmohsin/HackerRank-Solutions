// FUNCTION IMPLEMENTATION :
function angryProfessor(k, a) {
  let count = 0;

  for (let x of a) {
    if (x <= 0) {
      count++;
    }
  }
  if (count >= k) return "NO";
  else return "YES";
}

// TEST CASE :
function main() {
  // let k = 3;
  // let a = [-1, -3, 4, 2];
  let k = 2;
  let a = [0, -1, 2, 1];
  console.log(angryProfessor(k, a));
}

// EXECUTE TEST CASE :
main();
