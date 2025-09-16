// FUNCTION IMPLEMENTATION :
function superDigit(n, k) {
  // WAY 01 : (Runtime error on 4 out of 11 cases)
  // let str = "";
  // let result;
  // for (let i = 0; i < k; i++){
  //     str += n;
  // }

  // while (str.length > 1) {
  //     result = 0;
  //     for (let num of str) {
  //         result += Number(num);
  //     }
  //     str = result.toString();
  // }
  // return str;

  // WAY 02 : (works fine)
  let sum = 0n;
  for (let digit of n) {
    sum += BigInt(digit);
  }

  sum *= BigInt(k);

  while (sum >= 10n) {
    let temp = 0n;
    for (let digit of sum.toString()) {
      temp += BigInt(digit);
    }
    sum = temp;
  }
  return sum.toString();
}

// TEST CASE :
function main() {
  let n = "123";
  let k = 3;
  console.log(superDigit(n, k));
}

// EXECUTE TEST CASE :
main();
