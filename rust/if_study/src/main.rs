fn main() {
    // if
    let mut a = 30;

    // if如果有返回值，值得类型必须一样
    let weathter = if a > 30 { "cold" } else { "hot" };

    println!("the weather is {}", weathter);

    // loop 循环
    let b = loop {
        a -= 1;
        if a > 10 {
            continue;
        } else {
            println!("chenlei");

            break a; // loop的返回值
        }
    };
    println!("b is {}", b);

    // while 循环
    while a > 5 {
        a -= 1;
    }
    println!("after while a is {}", a);

    // for 循环
    let numbers = [1, 2, 3, 4];
    for number in numbers {
        println!("{}", number);
    }

    for x in 1..=3 {
        // 1..=3  一到三区间的整数，不要3则是1..3
        println!("{}", x);
    }

    // 两层loop
    let x = 1;
    let z = 'outer: loop {
        let mut y = 1;
        'inner: loop {
            if y == 3 {
                y += 1;
                continue 'inner;
            }
            println!("x:{},y:{}", x, y);
            y += 1;

            if y > 5 {
                break 'outer y;
            }
        }
    };
    println!("{}", z);

    'outer: for ld in 1..=5 {
        println!("ld is {}", ld);
        for chenlei in 2..=7 {
            if chenlei == 6 {
                break 'outer;
            }
            println!("ld is {},chenlei is {}", ld, chenlei);
        }
    }
}
