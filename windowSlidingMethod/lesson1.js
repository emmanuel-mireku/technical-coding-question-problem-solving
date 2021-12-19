// "Given an array, find the average of all contiguous subarrays of size ‘K’ in it."
let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2],
  K = 5;

let findAveragesOfSubarrays = (a, k) => {
  let result = [],
    windowEnd = 0,
    windowStart = 0,
    windowSum = 0.0;
  for (windowEnd; windowEnd < a.length; windowEnd++) {
    windowSum += a[windowEnd];
    if (windowEnd >= K - 1) {
      result.push(windowSum / k);
      windowSum -= a[windowStart];
      windowStart += 1;
    }
  }
  return result;
};

console.log(findAveragesOfSubarrays(arr, K));
