/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// var findAnagrams = function (s, p) {
//   const res = [];
//   const str_length = p.length;
//   const map = {};
//   for (let str of p) {
//     map[str] = (map[str] || 0) + 1;
//   }
//   for (let i = 0; i < s.length - (p.length - 1); i++) {
//     const copy_map = { ...map };
//     const split_str = s.substring(i, i + str_length);
//     for (let str of split_str) {
//       copy_map[str] && (copy_map[str] = copy_map[str] - 1);
//     }
//     if (Object.values(copy_map).every((v) => v === 0)) {
//       res.push(i);
//     }
//   }
//   return res;
// };

// console.log(findAnagrams("abab", "ab"));

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const res = [];
  const sLen = s.length;
  const pLen = p.length;

  if (sLen < pLen) return res;

  // 创建两个数组记录字符频次（因为都是小写字母，用数组比map更快）
  const count = new Array(26).fill(0);
  const window = new Array(26).fill(0);

  // 记录p中字符频次
  for (let i = 0; i < pLen; i++) {
    count[p.charCodeAt(i) - 97]++;
  }

  // 初始化窗口
  for (let i = 0; i < pLen; i++) {
    window[s.charCodeAt(i) - 97]++;
  }
  console.log(count);
  console.log(window);

  // 比较第一个窗口
  if (count.toString() === window.toString()) {
    res.push(0);
  }

  // 滑动窗口
  for (let i = 0; i < sLen - pLen; i++) {
    // 移除窗口最左边的字符
    window[s.charCodeAt(i) - 97]--;
    // 添加新的字符到窗口右边
    window[s.charCodeAt(i + pLen) - 97]++;

    if (count.toString() === window.toString()) {
      res.push(i + 1);
    }
  }

  return res;
};
findAnagrams("abab", "ab")