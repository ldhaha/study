/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const res = [];
  const str_length = p.length;
  const map = {};
  for (let str of p) {
    map[str] = (map[str] || 0) + 1;
  }
  for (let i = 0; i < s.length - (p.length - 1); i++) {

    const copy_map = { ...map };
    const split_str = s.substring(i, i + str_length);
    for (let str of split_str) {
      copy_map[str] && (copy_map[str] = copy_map[str] - 1)
    }
    if (Object.values(copy_map).every(v => v === 0)) {
      res.push(i)
    }

  }
  return res;
};

console.log(findAnagrams("abab", "ab"));
