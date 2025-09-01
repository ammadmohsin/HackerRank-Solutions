// FUNCTION IMPLEMENTATION :
function birthdayCakeCandles(candles) {
  let maxValue = Math.max(...candles);
  let count = 0;
  for (let x of candles) {
    if (x == maxValue) {
      count++;
    }
  }
  return count;
}

// TEST CASE :
function main() {
  let arr = [4, 4, 1, 3];
  console.log(birthdayCakeCandles(arr));
}

// EXECUTE TEST CASE :
main();
