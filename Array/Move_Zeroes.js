// 5️⃣ Move Zeroes

// Move all 0s to end while keeping order.

// Example
// [0,1,0,3,12] → [1,3,12,0,0]

function moveZero(nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }

  return nums[i];
}
console.log(moveZero([1, 0, 4, 5, 0, 7, 0, 7, 8]));
