// FUNCTION IMPLEMENTATION :
function minimumNumber(n, password) {
  let count = 0;

  count += !/[0-9]/.test(password) ? 1 : 0;
  count += !/[a-z]/.test(password) ? 1 : 0;
  count += !/[A-Z]/.test(password) ? 1 : 0;
  count += !/[!@#$%^&*()-+]/.test(password) ? 1 : 0;

  //return (n + count >= 6) ? count : n; (not appropriate bcz will return the length of password if all characters are present)
  return Math.max(count, 6 - n);
}

// TEST CASE :
function main() {
  let password = "2bb#A";
  console.log(minimumNumber(password.length, password));
}

// EXECUTE TEST CASE :
main();
