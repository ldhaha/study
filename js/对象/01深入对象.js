const chenlei = {};
let name = '陈磊';
let sex = '女'
Object.defineProperty(chenlei, 'name', {
    configurable: true, // 能不能删除
    enumerable: true, // 能不能遍历
    get() {
        return name;
    },
    set(val) {
        name = val;
    }
});


Object.defineProperties(chenlei, {
    age: {
        writable: true,
        value: 26
    },
    sex: {
        get() {
            return sex
        },
        set(val) {
            sex = val
        }
    }
})