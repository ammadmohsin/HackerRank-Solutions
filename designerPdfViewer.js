// FUNCTION IMPLEMENTATION :
function designerPdfViewer(h, word) {
  let max = -Infinity;
  for (let char of word) {
    if (h[char.charCodeAt(0) - 97] > max) {
      max = h[char.charCodeAt(0) - 97];
    }
  }
  return max * word.length;
}

// TEST CASE :
function main() {
  let h = [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5,
  ];
  let word = "abc";
  console.log(designerPdfViewer(h, word));
}

// EXECUTE TEST CASE :
main();
