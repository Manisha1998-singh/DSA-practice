// 4️⃣ Maximum Subarray (Kadane’s Algorithm)

// Find largest sum subarray.

// Example
// [-2,1,-3,4,-1,2,1,-5,4]

// Answer → 6 (subarray [4,-1,2,1])

function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentMaxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    currentMaxSum = Math.max(nums[i], currentMaxSum + nums[i]);
    maxSum = Math.max(maxSum, currentMaxSum);
  }
  return maxSum;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
