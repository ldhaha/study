/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const group_array = [];
    for (let i = 0; i < strs.length; i++) {
        if (!group_array.length) {
            group_array.push([strs[i]])
        } else {
            let inner_find = false;
            for (let j = 0; j < group_array.length; j++) {
                let find = true;
                const data = group_array[j];
                function countChar(arr) {
                    return arr.reduce((acc, letter) => {
                        if (acc[letter]) {
                            acc[letter]++;
                        } else {
                            // 否则，初始化计数为1
                            acc[letter] = 1;
                        }
                        return acc;
                    }, {});
                }
                const split_str = countChar(data[0].split(''));
                const str_split = countChar(strs[i].split(''));
                const keys = Object.keys(split_str);
                for (let k of keys) {
                    if (split_str[k] !== str_split[k]) {
                        find = false;
                        break;
                    }
                }
                if (find) {
                    inner_find = true;
                    data.push(strs[i]);
                    break;
                }

            }
            if (!inner_find) {
                group_array.push([strs[i]])
            }
        }

    }
    return group_array
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))