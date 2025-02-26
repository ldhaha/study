/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 1) {
        return 1
    }
    const sort_nums = [...new Set(nums)].sort((a, b) => a - b);
    let data = [];
    let max = 0;
    for (let i = 0; i < sort_nums.length; i++) {
        data.push(sort_nums[i])
        let no = true;
        let last = false;
        for (let j = i + 1; j < sort_nums.length; j++) {
            if (j === sort_nums.length - 1) {
                last = true;
            }
            if (sort_nums[j] - sort_nums[j - 1] === 1) {
                data.push(sort_nums[j]);
            } else {
                i = j - 1;
                max = max > data.length ? max : data.length;
                no = false;
                break;
            }
        }
        if (!no) {
            data = []
        }
        if (last) {
            break;
        }

    }
    max = max > data.length ? max : data.length;
    return max;
};
/**
 * 从小到大排序
遍历数组，比较相邻的两项，如果相同，则跳过，继续遍历下一项
如果 当前项+1 等于 下一项，说明遇到连续项，count +1
否则，说明连续情况发生中断，将 count 重置为 1

 * @param {*} nums 
 * @returns 
 */
function improve(nums) {
    if (nums.length === 0) return 0;
    let count = 1;
    let max = 1;
    const sort_nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < sort_nums.length - 1; i++) {
        const next = i + 1;
        if (nums[i] === nums[next]) continue
        if (sort_nums[next] === sort_nums[i] + 1) {
            count++;
        } else {
            count = 1;
        }
        max = Math.max(max, count)
    }

    return max
}
/** 1,2,3,4,100,200 */
console.log(improve([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))