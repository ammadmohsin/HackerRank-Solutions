// FUNCTION IMPLEMENTATION :
function plusMinus(arr) {
  let ratios = new Array(3).fill(0);
  for (let x of arr) {
    if (x > 0) {
      ratios[0]++;
    } else if (x < 0) {
      ratios[1]++;
    } else {
      ratios[2]++;
    }
  }
  for (let x of ratios) {
    ratios[ratios.indexOf(x)] = x / arr.length;
  }
  for (let x of ratios) {
    console.log(x);
  }
}

// TEST CASE :
function main() {
  let arr = [-4, 3, -9, 0, 4, 1];
  plusMinus(arr);
}

// EXECUTE TEST CASE :
main();
