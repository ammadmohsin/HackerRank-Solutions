// FUNCTION IMPLEMENTATION :
function processData(input) {
  //   let lines = input.trim().split("\n");

  //   input = lines.map((line) => {
  //     let [num, word] = line.split(" ");
  //     return [parseInt(num), word];
  //   });
  //   input.splice(0, 1);                  // removed 1st element cause it was length.

  // Below code will work if the input from HackerRank is in 2D array.
  // Otherwise uncomment the upper code and you are good to go.)
  input.sort((a, b) => a[0] - b[0]);
  let arr = new Array(100).fill(0);

  for (let i = 0; i < input.length; i++) {
    arr[input[i][0]]++;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] + arr[i - 1] <= input.length) {
      arr[i] = arr[i] + arr[i - 1];
    } else {
      arr[i] = input.length;
    }
  }
  console.log(arr.join(" "));
}

// TEST CASE :
function main() {
  let arr = [
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

  processData(arr);
}

// EXECUTE TEST CASE :
main();
