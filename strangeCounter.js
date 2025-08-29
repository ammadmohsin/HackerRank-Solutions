// FUNCTION IMPLEMENTATION :
function strangeCounter(t) {
  // 1: NON OPTIMIZED WAY : (timeout error on 4 cases)
  //   let initialValue = 3;
  //   let value = 3;

  //   for (let i = 1; i <= t; i++) {
  //     if (i == 1) {
  //       continue;
  //     }
  //     if (value == 1) {
  //       initialValue *= 2;
  //       value = initialValue;
  //     } else {
  //       value--;
  //     }
  //   }
  //   return value;

  // 2: OPTIMIZED WAY :
  let time = t;
  let cycleLength = 3;

  while (time > cycleLength) {
    time -= cycleLength;
    cycleLength *= 2;
  }

  return cycleLength - (time - 1);
}

// TEST CASE :
function main() {
  console.log(strangeCounter(1));
}

// EXECUTE TEST CASE :
main();
