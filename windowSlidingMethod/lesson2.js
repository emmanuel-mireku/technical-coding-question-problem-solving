// Given an array of positive numbers and a positive number âk,â find the maximum sum of any contiguous subarray of size âkâ.
let maxSubarrayOfSizeK = (k, arr) => {
  let max = 0,
    windowStart = 0,
    windowEnd = 0,
    windowSum = 0
    sub = k - 1
    len = arr.length;
  for (windowEnd; windowEnd < len; windowEnd++) {
      windowSum += arr[windowEnd];
      if(windowEnd >= sub){
          max = windowSum >= max ? windowSum : max;
          windowSum -= arr[windowStart];
          windowStart += 1;
      }
  }
  return max
};
