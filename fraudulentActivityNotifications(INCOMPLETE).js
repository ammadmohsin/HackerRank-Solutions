// FUNCTION IMPLEMENTATION :
function activityNotifications(expenditure, d) {
  // Time Limit on 5 out 0f 7 cases :
  let n = expenditure.length;
  let notification = 0;
  for (let i = d; i < n; i++) {
    let a = i - d;
    let arr = expenditure.slice(a, i);
    arr.sort((a, b) => a - b);
    let median = arr[Math.floor(arr.length / 2)];

    if (expenditure[i] >= 2 * median) {
      notification++;
    }
  }
  return notification;
}

// TEST CASE :
function main() {
  let expenditure1 = [2, 3, 4, 2, 3, 6, 8, 4, 5];
  let expenditure2 = [1, 2, 3, 4, 4];
  let expenditure3 = [10, 20, 30, 40, 50];
  let d = 3;
  console.log(activityNotifications(expenditure3, d));
}

// EXECUTE TEST CASE :
main();
