// FUNCTION IMPLEMENTATION :
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let m = apples.length;
  let n = oranges.length;
  let inclusiveApples = 0;
  let inclusiveOranges = 0;

  //   // 1. LONG WAY : (works fine)
  //   let landedApples = [];
  //   let landedOranges = [];

  //   for (let i = 0; i < m; i++) {
  //     landedApples.push(apples[i] + a);
  //   }
  //   for (let j = 0; j < n; j++) {
  //     landedOranges.push(oranges[j] + b);
  //   }

  //   for (let i = 0; i < m; i++) {
  //     if (landedApples[i] >= s && landedApples[i] <= t) {
  //       inclusiveApples++;
  //     }
  //   }
  //   for (let j = 0; j < n; j++) {
  //     if (landedOranges[j] >= s && landedOranges[j] <= t) {
  //       inclusiveOranges++;
  //     }
  //   }

  // 2. SHORT WAY : (works fine)
  for (let i = 0; i < m; i++) {
    if (apples[i] + a >= s && apples[i] + a <= t) {
      inclusiveApples++;
    }
  }
  for (let j = 0; j < n; j++) {
    if (oranges[j] + b >= s && oranges[j] + b <= t) {
      inclusiveOranges++;
    }
  }

  //  console.log(inclusiveApples + "\n" + inclusiveOranges);
  console.log(inclusiveApples);
  console.log(inclusiveOranges);
}

// TEST CASE :
function main() {
  let s = 7;
  let t = 11;
  let a = 5;
  let b = 15;
  let apples = [-2, 2, 1];
  let oranges = [5, -6];

  countApplesAndOranges(s, t, a, b, apples, oranges);
}

// EXECUTE TEST CASE :
main();
