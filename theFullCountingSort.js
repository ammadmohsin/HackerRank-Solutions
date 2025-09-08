// FUNCTION IMPLEMENTATION :
function countSort(arr) {
  let mid = Math.floor(arr.length / 2);
  for (let i = 0; i < mid; i++) {
    arr[i][1] = "-";
  }
  arr.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < arr.length; i++) {
    process.stdout.write(arr[i][1] + " ");
  }
}

// TEST CASE :
function main() {
  let arr = [
    [0, "ab"],
    [6, "cd"],
    [0, "ef"],
    [6, "gh"],
    [4, "ij"],
    [0, "ab"],
    [6, "cd"],
    [0, "ef"],
    [6, "gh"],
    [0, "ij"],
    [4, "that"],
    [3, "be"],
    [0, "to"],
    [1, "be"],
    [5, "question"],
    [1, "or"],
    [2, "not"],
    [4, "is"],
    [2, "to"],
    [4, "the"],
  ];

  countSort(arr);
}

// EXECUTE TEST CASE :
main();
