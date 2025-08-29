// FUNCTION IMPLEMENTATION :
function bigSorting(unsorted) {

    // sort gets a callback (
    // if its : 
    // ( -1 : puts a before b )  (-1 means b greater than b     )
    // ( 0 : if its equal     )  ( 0 means a and b are equal    )
    // ( 1 : puts a after b   )  ( 1 means a is greater than b  )
    
    unsorted.sort((a, b) => {
    if (a.length != b.length) {
      return a.length - b.length;
    }

    return a.localeCompare(b);
  });

  return unsorted;
}

// TEST CASE :
function main() {
  let arr = [
    "1",
    "2",
    "100",
    "111",
    "200",
    "3084193741082937",
    "3084193741082938",
    "12303479849857341718340192371",
  ];
  let result = bigSorting(arr);
  console.log(result);
}

// EXECUTE TEST CASE :
main();
