fn add(a: i32, b: i32) -> i32 {
    let sum = a + b;
    sum // 不加分号就是返回值
}

fn returnType() -> String {
    return "123".to_string();
}

fn main() {
    let a = add(1, 5);
    println!("hah {}", a);
    println!("hah {}", returnType())
}
