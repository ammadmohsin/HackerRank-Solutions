// FUNCTION IMPLEMENTATION :
function maxSubarray(arr) { // Only found the maximum Subsequence Sum. Max Subarray sum is remaining.
    let maxSubsequenceSum = 0;
    let hasPositive = false;
    let max = -Infinity;
    let maxSubarraySum = 0;
    for (let num of arr) {
        if (num > 0) {
            maxSubsequenceSum += num;
            hasPositive = true;
        }
        max = Math.max(max, num);
    }
    if (!hasPositive) { maxSubsequenceSum = max };
    return maxSubsequenceSum;
}

// TEST CASE :
function main() {
    let arr = [-1, 2, 3, -4, 5, 10];
    console.log(maxSubarray(arr));
}

// EXECUTE TEST CASE :
main();
