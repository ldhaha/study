fn main() {
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");

    // 布尔
    let f: bool = false;
    let t = true;

    // 在 Rust 中，带变音符号的字母（Accented letters），中文、日文、韩文等字符，emoji（绘文字）以及零长度的空白字符都是有效的 char 值
    let c: char = 'a';
    let s = "哈哈哈";
    println!("{} {} {} {}", f, t, c, s);

    // 元组
    let turple = ("陈磊", 27, "male");
    let (name, age, sex) = turple;
    println!("{},{},{}", name, age, sex);
    // 不带任何值的元组有个特殊的名称，叫做 单元（unit） 元
    let first_ele = turple.1;
    println!("{}", first_ele);

    // 数组,类型必须相同
    let arr = [1, 2, 3, 4];
    // 创建一个含有5个i32类型的数组
    let a: [i32; 5] = [1, 2, 3, 4, 5];

    // 创建一个含有5个3的数组
    let b = [3; 5];
    println!("{} {} {}", arr[0], a[0], b[0]);
}
