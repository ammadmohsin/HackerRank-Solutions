// FUNCTION IMPLEMENTATION :
function maximumToys(prices, k) {
  let items = new Array();
  let result = 0;
  let count = 0;
  prices.sort((a, b) => a - b);
  for (let price of prices) {
    if (price + result <= k) {
      result += price;
      count++;
    } else {
      return count;
    }
  }
}

// TEST CASE :
function main() {
  let k = 7;
  let prices = [1, 2, 3, 4];
  console.log(maximumToys(prices, k));
}

// EXECUTE TEST CASE :
main();
