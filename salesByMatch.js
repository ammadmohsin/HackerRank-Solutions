// FUNCTION IMPLEMENTATION :
function sockMerchant(n, ar) {
  let sockCount = {};
  let pairs = 0;

  for (let i = 0; i < n; i++) {
    let color = ar[i];
    if (sockCount[color]) {
      sockCount[color]++;
    } else {
      sockCount[color] = 1;
    }
  }
  for (let color in sockCount) {
    pairs += Math.floor(sockCount[color] / 2);
  }

  return pairs;
}

// TEST CASE :
function main() {
  console.log("Sales by Match");
  let result = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
}

// EXECUTE TEST CASE :
main();
