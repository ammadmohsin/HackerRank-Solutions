// FUNCTION IMPLEMENTATION : 
function insertionSort2(n, arr) {
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while(j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
        console.log(arr.join(" "));
    }
}

// TEST CASE : 
function main() {
    let arr = [3, 4, 7, 5, 6, 2, 1];
    let n = arr.length;
    insertionSort2(n, arr);
}

// EXECUTE TEST CASE : 
main();
