// FUNCTION IMPLEMENTATION : 
function insertionSort1(n, arr) {
    let e = arr[n - 1];

    for (let i = n - 1; i > 0; i--){
        if (arr[i-1] > e) {
            arr[i] = arr[i - 1];
            console.log(arr.join(" "));
        }
        else {
            arr[i] = e;
            console.log(arr.join(" "));
            break;
        }
    } 
}

// TEST CASE : 
function main() {
    let arr = [1, 2, 4, 5, 3];
    let n = arr.length;
    insertionSort1(n, arr);
}

// EXECUTE TEST CASE : 
main();