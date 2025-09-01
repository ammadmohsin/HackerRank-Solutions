// FUNCTION IMPLEMENTATION :
function getMoneySpent(keyboards, drives, b) {
  let itemPrices = [0];
  let def = -1;
  let k = keyboards.length;
  let d = drives.length;

  for (let i = 0; i < k; i++) {
    for (let j = 0; j < d; j++) {
      let amount = keyboards[i] + drives[j];
      if (amount <= b) {
        itemPrices.push(amount);
      }
    }
  }
  let maxAmount = Math.max(...itemPrices);
  if (maxAmount != 0) {
    return maxAmount;
  } else {
    return def;
  }
}

// TEST CASE :
function main() {
    let b = 10;
    let keyboards = [3, 1];
    let drives = [5, 2, 8];

    console.log(getMoneySpent(keyboards, drives, b));
}

// EXECUTE TEST CASE :
main();
