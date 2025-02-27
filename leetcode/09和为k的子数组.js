/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// [1,2,1,2,1] 3
var subarraySum = function (nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i]
        if (sum === k) {
            count++;
        }
        let right = i + 1;
        while (right < nums.length) {
            sum += nums[right];
            if (sum === k) {
                count++;
            }
            right++
        }
    }

    return count
};

console.log(subarraySum([1, 2, 1, 2, 1], 3))