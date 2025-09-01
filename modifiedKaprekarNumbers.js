// FUNCTION IMPLEMENTATION :
function kaprekarNumbers(p, q) {
  let kapreArray = new Array();
  for (let i = p; i <= q; i++) {
    let num = Math.pow(i, 2);
    let numStr = num.toString();
    let splittt = Math.ceil(numStr.length / 2) * -1;

    let left = numStr.slice(0, splittt);
    let right = numStr.slice(splittt);

    if (Number(left) + Number(right) == i) {
      kapreArray.push(i);
    }
  }
  if (kapreArray.length > 0) {
    console.log(kapreArray.join(" "));
  } else console.log("INVALID RANGE");
}

// TEST CASE :
function main() {
  let p = 1;
  let q = 100;
  console.log(kaprekarNumbers(p, q));
}

// EXECUTE TEST CASE :
main();
