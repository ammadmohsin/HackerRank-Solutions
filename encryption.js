// FUNCTION IMPLEMENTATION :
function encryption(s) {
    s = s.replace(/\s+/g, "");
    let r = Math.floor(Math.sqrt(s.length));
    let c = Math.ceil(Math.sqrt(s.length));
    let result = "";
    for (let i = 0; i < c; i++){
        for (let j = i; j < s.length; j += c) {
            result += s[j];
        }
        result += " ";
    }
    return result;
}

// TEST CASE :
function main() {
    let s1 = "if man was meant to stay on the ground god would have given us roots";
    let s2 = "chill out";
    let s3 = "feed the dog";
    console.log(encryption(s1));
}

// EXECUTE TEST CASE :
main();
