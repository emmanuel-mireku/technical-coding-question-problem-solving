/**
 * Find a number in a sorted array that adds up to a target
 * @param {(number[])} arr - an array of sorted integers
 * @param {(number)} t - target
 * @return {(number[]|[])} - Either an array of the integers that adds up to the target or an empty array
 * @summary 
 ******************************************************************************************************************
  I will create two pointers A and B                                                                             
  A will be set to 0 so it can start from the zeroth index of the array                                          
  B Will be set to arr's length - 1 so that it will start from the end of the array                              
  while A is less than B:                                                                                        
  I will add the index at A and B and if it is equal then I will return the values at the indexes in an array    
  If the sum is greater than B then decrement B by 1 and else increment A by 1 until a match is found              
  If a match is not found, return an empty array ([])
 ******************************************************************************************************************
 */
const twoSum = (arr, t) => {
  let a = 0,
    b = arr.length - 1;
  while (a < b) {
    let sum = arr[a] + arr[b];
    if (sum === t) return [arr[a], arr[b]];
    if (sum > t) b--;
    else a++;
  }
  return [];
};

console.log(twoSum([-5, -3, 1, 10], 7)); // [-3, 10]
console.log(twoSum([-5, -3, -1, 1, 2], 30)); // []
console.log(twoSum([-3, -2, -1, 1, 1, 3, 4], -4)); // [-3, -1]
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8]), 4);
console.log(twoSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2)); // [1, 1]