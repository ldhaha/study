/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const res = [];
  const str_length = p.length;
  for (let i = 0; i < s.length - (p.length - 1); i++) {
    const split_str = s.substring(i, i + str_length);
    const sort_split_str = split_str.split("");
    sort_split_str.sort();
    const sort_target_str = p.split("");
    sort_target_str.sort();
    if (JSON.stringify(sort_split_str) === JSON.stringify(sort_target_str)) {
      res.push(i);
    }
  }
  return res;
};

console.log(findAnagrams("abab", "ab"));
