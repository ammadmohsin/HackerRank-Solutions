// FUNCTION IMPLEMENTATION :
function marcsCakewalk(calorie) {
  let result = 0;
  let i = 0;
  calorie.sort((a, b) => b - a);
  for (let num of calorie) {
    result += num * Math.pow(2, i);
    i++;
  }
  return result;
}

// TEST CASE :
function main() {
  let calorie_1 = [7, 4, 9, 6];
  let calorie_2 = [1, 3, 2];
  console.log(marcsCakewalk(calorie_2));
}

// EXECUTE TEST CASE :
main();
