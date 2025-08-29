// FUNCTION IMPLEMENTATION :
function quickSort(arr) {
    let sampleArr = new Array();
    let p = arr[0];
    sampleArr.push(p);

    for (let i = 1; i < arr.length; i++){
        if (arr[i] > p) {
            sampleArr.push(arr[i]);
        }
        else {
            sampleArr.splice(0, 0, arr[i]);
        }
    }
    return sampleArr;
    
}

// TEST CASE :
function main() {
    let arr = [4, 5, 3, 7, 2];
    console.log(quickSort(arr).join(" "));
}

// EXECUTE TEST CASE :
main();
