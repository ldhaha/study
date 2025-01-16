use std::io; // 使用标准库io这个包

fn main() {
    println!("hello world");
    println!("please input a number");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("failed to red ");
    println!("your raw input is {:?}", input);

    let mut y = 0;
    loop {
        y += 1;
        if y > 30 {
            break;
        }
    }
    print!("{}", y);
}
