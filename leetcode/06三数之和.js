/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  const sort_num = nums.sort((a, b) => a - b);
  const size = sort_num.length;
  if (sort_num[0] <= 0 && sort_num[size - 1] >= 0) {
    let i = 0;
    while (i < size - 2) {
      if (i > 0 && sort_num[i] === sort_num[i - 1]) {
        i++;
        continue;
      }
      if (sort_num[i] > 0) break;
      let first = i + 1;
      let last = size - 1;
      while (first < last) {
        if (sort_num[i] * sort_num[last] > 0) break;
        const sum = sort_num[i] + sort_num[first] + sort_num[last];
        if (sum === 0) {
          res.push([sort_num[i], sort_num[first], sort_num[last]]);
          while (first < last && sort_num[first] === sort_num[first + 1])
            first++;
          while (first < last && sort_num[last] === sort_num[last - 1]) last--;
          first++;
          last--;
        } else if (sum < 0) {
          first++;
        } else {
          last--;
        }
      }
      i++;
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
