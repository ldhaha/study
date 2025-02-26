/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let left;
    let right;
    for (let i = 0; i < nums.length; i++) {
        left = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                right = j;
                break;
            }
        }
        if (right) {
            break;
        }
    }
    return [left, right]

};
console.log(twoSum([2, 7, 11, 15], 9))