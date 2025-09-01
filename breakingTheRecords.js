// FUNCTION IMPLEMENTATION :
function breakingRecords(scores) {
  let n = scores.length;
  let minScore,
    maxScore,
    minCount = 0,
    maxCount = 0;

  for (let i = 0; i < n; i++) {
    if (i != 0) {
      if (scores[i] > maxScore) {
        maxScore = scores[i];
        maxCount++;
      }
      if (scores[i] < minScore) {
        minScore = scores[i];
        minCount++;
      }
    } else {
      minScore = scores[i];
      maxScore = scores[i];
    }
  }

  let result = [maxCount, minCount];
  return result;
}

// TEST CASE :
function main() {
    let arr = [10, 5, 20, 20, 4, 5, 2, 25, 1];
    console.log(breakingRecords(arr));
}

// EXECUTE TEST CASE :
main();
