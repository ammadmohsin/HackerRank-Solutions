// FUNCTION IMPLEMENTATION :
function squares(a, b) {
  // 1. WAY ONE : (Time-out Error on some cases)
  // let count = 0;
  // let ans = true;
  // for (let i = a; i<=b; i++){
  //     if (Number.isInteger(Math.sqrt(i)) === ans ){
  //         count++;
  //     }
  // }
  // return count;

  // 2. WAY TWO : (Maths Trick)
  let start = Math.ceil(Math.sqrt(a));
  let end = Math.floor(Math.sqrt(b));
  return end - start + 1;
}

// TEST CASE :
function main() {
  let a = 24;
  let b = 49;
  console.log(squares(a, b));
}

// EXECUTE TEST CASE :
main();
