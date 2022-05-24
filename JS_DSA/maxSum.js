/**
 * Find the max sum of an array of integers,
 * consisting of K items from the right to left
 * 
 * @param {number[]} arr  - Array of integers
 * @param {number} k - Number of elements to sum up.
 * @returns {number}
 * @summary
 */
const maxSum = (arr, k) => {
    let start = 0, end = 0, arrLen = arr.length, sum = 0, max = 0;
    for(end; end < arrLen; end++){
        sum += arr[end];
        if(end >= k - 1){
            max = Math.max(sum, max);
            sum -= arr[start]
            start++;
        }
    }
    return max;
}

console.log(maxSum([1,2,3], 3));