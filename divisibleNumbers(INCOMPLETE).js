// FUNCTION IMPLEMENTATION :
function divisibleNumbers(n) {
  //Run time error.. too much memory consumption
  let i = 1;
  while (true) {
    if (i % n == 0) {
      let str = i.toString();

      if (str.includes("0")) {
        i++;
        continue;
      }

      let sum = 0,
        product = 1;
      for (let ch of str) {
        let num = parseInt(ch);
        sum += num;
        product *= num;
      }

      if (sum >= product) {
        return str.length;
      }
    }
    i++;
  }
}

// TEST CASE :
function main() {
  let n = 9;
  console.log(divisibleNumbers(n));
}

// EXECUTE TEST CASE :
main();
