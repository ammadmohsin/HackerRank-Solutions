// FUNCTION IMPLEMENTATION :
function minimumLoss(price) {
  let min = Infinity;
  for (let i = 0; i < price.length - 1; i++) {
    for (let j = i + 1; j < price.length; j++) {
      if (price[i] > price[j]) {
        let diff = price[i] - price[j];
        if (min > diff) {
          min = diff;
        }
      }
    }
  }
  return min;
}

// TEST CASE :
function main() {
  let price1 = [20, 7, 8, 2, 5];
  let price2 = [5, 10, 3];
  console.log(minimumLoss(price2));
}

// EXECUTE TEST CASE :
main();
