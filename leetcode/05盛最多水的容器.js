/**
 * @param {number[]} height
 * @return {number}
 */

/** 超时 */
var maxArea = function (height) {
    let max = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const minHeight = Math.min(height[i], height[j])
            max = Math.max(max, minHeight * (j - i))
        }
    }

    return max;
};

function improve(height) {
    let l = 0, r = height.length - 1;  // 初始化左右指针
    let ans = 0;  // 初始化最大水量

    while (l < r) {
        // 计算当前水量：较短的线段高度 * 宽度
        let water = Math.min(height[l], height[r]) * (r - l);

        // 更新最大水量
        ans = Math.max(ans, water);

        // 移动指针：始终移动较小的一边
        if (height[l] <= height[r]) {
            l++;  // 移动左指针
        } else {
            r--;  // 移动右指针
        }
    }

    return ans;  // 返回最大水量
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

