// FUNCTION IMPLEMENTATION :
function chiefHopper(arr) {
  let beforeEnergy = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    beforeEnergy = Math.ceil((beforeEnergy + arr[i]) / 2);
  }
  return beforeEnergy;
}

// TEST CASE :
function main() {
  let arr1 = [2, 3, 4, 3, 2];
  let arr2 = [3, 4, 3, 2, 4];
  console.log(chiefHopper(arr2));
}

// EXECUTE TEST CASE :
main();
