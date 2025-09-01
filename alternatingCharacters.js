// FUNCTION IMPLEMENTATION :
function alternatingCharacters(s) {
    let count = 0;
    for (let i = 0; i < s.length-1; i++){
        if (s[i] === s[i + 1]) {
            count++;
        }   
    }
    return count;
}

// TEST CASE :
function main() {
    // let s = "AAAA";
    // let s = "BBBBB";
    // let s = "ABABABAB";
    // let s = "BABABA";
    let s = "AAABBB";

    console.log(alternatingCharacters(s));
}

// EXECUTE TEST CASE :
main();
