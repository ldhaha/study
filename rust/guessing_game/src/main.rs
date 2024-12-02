use std::io;
use rand::Rng;
fn main() {
    println!("才数!");
    println!("猜测一个数");
    let secret_number = rand::thread_rng().gen_range(1..101);
    println!("神秘数字是{}",secret_number);
    let mut guess = String::new();
    io::stdin().read_line(&mut guess).expect("无法运行");
    println!("您猜的数是{}",guess);
}
