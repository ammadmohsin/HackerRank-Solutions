// FUNCTION IMPLEMENTATION :
function jimOrders(orders) {
  let serveTime = new Array();
  let ordering = new Array();

  for (let i = 0; i < orders.length; i++) {
    serveTime.push([orders[i][0] + orders[i][1], i + 1]);
  }

  serveTime.sort((a, b) => a[0] - b[0]);

  for (let [a, b] of serveTime) {
    ordering.push(b);
  }
  return ordering;
}

// TEST CASE :
function main() {
  let orders1 = [
    [1, 3],
    [2, 3],
    [3, 3],
  ];
  let orders2 = [
    [8, 1],
    [4, 2],
    [5, 6],
    [3, 1],
    [4, 3],
  ];
  console.log(jimOrders(orders2));
}

// EXECUTE TEST CASE :
main();
