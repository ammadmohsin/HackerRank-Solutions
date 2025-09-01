// FUNCTION IMPLEMENTATION :
function bonAppetit(bill, k, b) {
  let bCharged = b;
  let totalBill = 0;

  for (let item of bill) {
    totalBill += item;
  }
  let bActual = (totalBill - bill[k]) / 2;

  if (bActual == bCharged) {
    console.log("Bon Appetit");
  } else {
    console.log(bCharged - bActual);
  }
}

// TEST CASE :
function main() {
    let k = 1;
    let b = 12;
    let bill = [3, 10, 2, 9];

    bonAppetit(bill, k, b);
}

// EXECUTE TEST CASE :
main();
