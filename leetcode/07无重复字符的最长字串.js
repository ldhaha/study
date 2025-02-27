/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let arr = [];
  if (s.length <= 1) {
    return s.length;
  }
  arr.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (arr.indexOf(s[i]) > -1) {
      max = Math.max(arr.length, max);
      let index = arr.findIndex((e) => e === s[i]) + 1;
      arr = arr.splice(index);
    }
    arr.push(s[i]);
  }
  return Math.max(arr.length, max);
};
console.log(lengthOfLongestSubstring("pwwkew"));
