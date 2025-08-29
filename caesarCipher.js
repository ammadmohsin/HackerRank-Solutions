// FUNCTION IMPLEMENTATION : 
function caesarCipher(s, k) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "A" && s[i] <= "Z") {
      let code = s.charCodeAt(i) - 65;              // to turn it into aplhabetical number (0 - 25) (65 = 'A')
      let shifted = (code + k) % 26;                // to check if number doesnt exceed the ascii code of alphabets
      result += String.fromCharCode(shifted + 65);  // return back into ascii code of the shifted alphabet
    } else if (s[i] >= "a" && s[i] <= "z") {
      let code = s.charCodeAt(i) - 97;
      let shifted = (code + k) % 26;
      result += String.fromCharCode(shifted + 97);
    } else {
      result += char;
    }
  }
  return result;
}

// TEST CASE : 
function main() {
  let s = "abcdefghijklmnopqrstuvwxyz";
  let k = 2;
  console.log(caesarCipher(s, k));
}

// EXECUTE TEST CASE :
main();
