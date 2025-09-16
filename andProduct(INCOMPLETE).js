// FUNCTION IMPLEMENTATION :
function andProduct(a, b) { // Wrong answer on 4 out of 21 cases.
    let result = a;
    for (let i = a + 1; i <= b; i++){
        result &= i;
    }
    return result;
}

// TEST CASE :
function main() {
    let a = 11;
    let b = 15;
    console.log(andProduct(a, b));
}

// EXECUTE TEST CASE :
main();
