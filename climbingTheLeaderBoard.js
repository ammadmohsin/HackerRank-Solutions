// FUNCTION IMPLEMENTATION :
function climbingLeaderboard(ranked, player) {
  let ranking = new Array();
  let arr = [...new Set(ranked)];
  let n = arr.length - 1;

  // WAY 01 : (correct but time limit on 2 out of 11 cases.)
  // for (let num of player) {
  //    for (let i = 0; i <= n; i++) {
  //        if (num >= arr[i]){
  //            ranking.push(i + 1);
  //            break;
  //        }
  //        else if (i == n) {
  //            ranking.push(arr.length + 1);
  //        }
  //     }
  // }
  // return ranking;

  // WAY 02 : (Correct and Working)
  for (let score of player) {
    while (n >= 0 && score >= arr[n]) {
      n--;
    }
    ranking.push(n + 2);
  }
  return ranking;
}

// TEST CASE :
function main() {
  let ranked = [100, 90, 90, 80, 75, 60];
  let player = [50, 65, 77, 90, 102];
  // let ranked = [100, 100, 50, 40, 40, 20, 10];
  // let player = [5, 25, 50, 120];
  console.log(climbingLeaderboard(ranked, player).join(" "));
}

// EXECUTE TEST CASE :
main();
