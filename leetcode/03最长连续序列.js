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

console.log(longestConsecutive([1, 0, 1, 2]))