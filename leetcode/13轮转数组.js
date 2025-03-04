/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 超时;
var rotate = function (nums, k) {
  if (nums.length === 1) return;
  let i = 0;
  while (i < k) {
    const number = nums.pop();
    nums.unshift(number);
    i++;
  }
  console.log(nums);
};
rotate([-1, -100, 3, 99], 2);
