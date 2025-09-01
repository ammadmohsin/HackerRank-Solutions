// FUNCTION IMPLEMENTATION :
function taumBday(b, w, bc, wc, z) {
  //NOTE : used BigInt cause there will be higher values in calculation that wont be handled by Numbers data type.
  (b = BigInt(b)),
    (w = BigInt(w)),
    (bc = BigInt(bc)),
    (wc = BigInt(wc)),
    (z = BigInt(z));
  let b_to_w = bc + z;
  let w_to_b = wc + z;
  let wGifts = 0;
  let bGifts = 0;
  let total = 0;

  if (b_to_w > wc) {
    wGifts = w * wc;
  } else {
    wGifts = w * b_to_w;
  }

  if (w_to_b > bc) {
    bGifts = b * bc;
  } else {
    bGifts = b * w_to_b;
  }

  total = bGifts + wGifts;
  return total.toString();
}

// TEST CASE :
function main() {
  let b = 3,
    w = 5,
    bc = 3,
    wc = 4,
    z = 1;
  console.log(taumBday(b, w, bc, wc, z));
}

// EXECUTE TEST CASE :
main();
