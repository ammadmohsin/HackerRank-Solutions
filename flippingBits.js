// FUNCTION IMPLEMENTATION :
function flippingBits(n) {
  let dividend = n;
  let binary = "";
  let result = 0;
  let arr = new Array();
  if (n > 1) {
    while (dividend != 1) {
      arr.unshift(dividend % 2);
      dividend = Math.floor(dividend / 2);
    }
    arr.unshift(dividend);
    // console.log(arr);
    binary = arr.map((bit) => (bit === 0 ? 1 : 0)).join("");
    // console.log(binary);
    binary = "1".repeat(32 - binary.length) + binary;
    // console.log(binary);
  } else {
    if (n == 1) {
      binary = "1".repeat(31) + "0";
    } else {
      binary = "1".repeat(31) + "1";
    }
  }

  for (let i = 0; i < binary.length; i++) {
    if (binary[binary.length - 1 - i] == 1) {
      result += Math.pow(2, i);
    }
  }
  // console.log(result);
  return result;
}

// TEST CASE :
function main() {
  let n = 1;
  console.log(flippingBits(n));
}

// EXECUTE TEST CASE :
main();
