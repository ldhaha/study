/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/** 超时 */
var maxSlidingWindow = function (nums, k) {
    const res = [];
    if (k >= nums.length) {
        return [nums.sort((a, b) => a - b).pop()]
    }
    for (let i = 0; i < nums.length - (k - 1); i++) {
        const s = nums.slice(i, i + k);
        console.log(s);
        res.push(s.sort((a, b) => a - b).pop())
    }
    return res;
};

console.log(maxSlidingWindow([1], 1))