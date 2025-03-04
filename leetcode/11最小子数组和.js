/**
 * @param {number[]} nums
 * @return {number}
 */

// 超时
var maxSubArray = function (nums) {
  if (!nums.length) {
    return;
  }
  let max_all = nums[0];
  let max_ending = nums[0];
  for (let i = 1; i < nums.length; i++) {
    max_ending = Math.max(nums[i], max_ending + nums[i]);
    max_all = Math.max(max_all, max_ending);
  }

  return max_all;
};
/**
 * i = 0 ;  -2;j = 1
 */
console.log(maxSubArray([-2, -1]));
