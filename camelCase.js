// FUNCTION IMPLEMENTATION :
function camelcase(s) {
  let count = 1;
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // ONE WAY : 
  for (let x of s.split('')) {
      for (let y of upperCase.split('')) {
          if (x === y) {
              count++;
              break;
          }
        }
    }
    
    // SECOND WAY :
    for (let x of s) {
        if (x >= 'A' && x <= 'Z') {
            count++
        }
    }

  console.log(upperCase);

  return count;
}

// TEST CASE :
function main() {
  let s = "saveChangesInTheEditor";
  console.log(s);
    let result = camelcase(s);
    console.log(result);
}

// EXECUTE TEST CASE :
main();
