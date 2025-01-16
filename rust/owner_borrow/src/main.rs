fn main() {
    let mut s: &str = "13";
    println!("{}", s);
    s = "456";
    println!("{}", s);

    let mut s1 = String::from("12");
    s1.push_str("chenlei");
    let s2 = s1; // s1不再有值，针对放在堆上的数据
    println!("{}", s2);

    let x = 5;
    let y = x;
    let ld = "lindong";
    let chenlei = ld;
    println!("{} {} {} {}", x, y, ld, chenlei);

    let linyue = String::from("ad");
    fn take_ownership(s: &String) {
        // 此时的 linyue 不再拥有String::from("ad");的所有权，需要改成 &String;,传参也改成&linyue
        println!("{}", s)
    }
    take_ownership(&linyue);
    println!("{}", linyue);

    fn change(str1: &mut String) {
        str1.push_str("world");
        println!("after change is {}", str1)
    }
    let mut xietian = String::from("hello");
    change(&mut xietian);
    println!("xiatian is {}", xietian);

    let xietian1 = &xietian; // 不能同时存在可变和不可变引用
                             // let xietian2 = &mut xietian;
                             // let xietian3 = &xietian;
    println!("{}", xietian1);
}
