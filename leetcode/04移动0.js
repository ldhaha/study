/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            continue;
        } else {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] !== 0) {
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    break
                }

            }
        }

    }
    return nums
};

function improve(nums) {
    //获取数组长度
    let len = nums.length;
    //循环遍历数组
    for (let i = 0; i < len; i++) {
        //当数组哪个位置是0 ，就删除这个这个位置的元素，然后在末尾补 0
        //从而就达到了 把所有0移动到数组末尾的要求且保持的非零元素的相对顺序
        if (nums[i] == 0) {
            nums.splice(i, 1)
            nums.push(0)
            //当为0的元素删除后，下一个元素就会前进一位占据该位置，所以要从该位置在进行判断
            i--
            //当移动到末尾的元素，就不用再一次进行遍历了，所以遍历的长度要减去1位
            len--
        }
    }
    return nums

}


console.log(moveZeroes([0, 1, 0, 3, 12]))
