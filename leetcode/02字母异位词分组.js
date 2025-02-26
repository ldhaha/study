/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map()
    for (let item of strs) {
        // 字符串排序， 拿到放入哈希表中的模板， s 即为模板
        // 首先去看哈希表中 不 存在该模板的时候是如何做的！！！ 不要直接看 if语句
        let s = [...item].sort().join('')
        if (map.has(s)) {
            // 如果哈希表中 存在该模板，那么就拿到对应的数组， 将值push进去
            map.get(s).push(item)
        } else {
            // 如果哈希标中 不 存在该模板， 就让这个模板作为键， 数组作为值存入哈希表。。
            // 数组中的第一个值 就是这个 strs 中的值
            map.set(s, [item])
        }
    }
    return [...map.values()]
};

console.log(groupAnagrams(["", "b"]))