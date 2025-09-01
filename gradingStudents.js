// FUNCTION IMPLEMENTATION :
function gradingStudents(grades) {
  let n = grades.length;
  let updatedGrades = new Array();
  for (let i = 0; i < n; i++) {
    if (grades[i] >= 38) {
      let nextMultiple = grades[i] + (5 - (grades[i] % 5));
      if (nextMultiple - grades[i] < 3) {
        updatedGrades.push(nextMultiple);
      } else {
        updatedGrades.push(grades[i]);
      }
    } else {
      updatedGrades.push(grades[i]);
    }
  }
  return updatedGrades;
}

// TEST CASE :
function main() {
  let arr = [73, 67, 38, 33];
  console.log(gradingStudents(arr));
}

// EXECUTE TEST CASE :
main();
