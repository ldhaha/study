fn main() {
    struct Point {
        x: f64,
        y: f64,
    }
    let mut p = Point { x: 20.0, y: 25.0 };

    p.x = 12.3;

    let x = &mut p;
    x.x = 12.4;

    println!("{},{}", x.x, x.y);
    println!("{},{}", p.x, p.y);
    let mut a = String::from("value");
    let b = &mut a;
    b.push_str("add");
    println!("{}", b);
    println!("{}", a);

    struct User {
        username: String,
        email: String,
        age: u8,
    }

    let user1 = User {
        username: String::from("value"),
        email: String::from("value"),
        age: 23,
    };

    let user2 = User {
        email: String::from("value"),
        age: 25,
        ..user1 // 会发生所有权转移
    };
    println!("{},{},{}", user2.age, user2.username, user2.email);
    println!("{}", user1.age);

    // 元组结构体
    struct Color(u8, u8, u8);
    let red = Color(255, 255, 0);
    println!("{},{},{}", red.0, red.1, red.2);

    // 单元结构体
    // struct Marker;
    // let marker = Marker;

    //函数结构体
    struct Rect {
        width: u8,
        height: u8,
    }
    impl Rect {
        fn area(&self) -> u8 {
            self.width * self.height
        }
    }
    let rect = Rect {
        width: 4,
        height: 10,
    };
    let area = rect.area();
    println!("area is {}", area);

    // 函数结构体 & ，&mut比较
    struct Person {
        name: String,
        age: u8,
    }
    impl Person {
        fn greet(&self) {
            println!("my name is {}", self.name)
        }

        fn change_name(&mut self) {
            self.name = String::from("lindong");
        }

        fn get_name_and_consume(self) -> String {
            self.name
        }
    }

    let mut person1 = Person {
        name: String::from("chenlei"),
        age: 32,
    };
    println!("my name is {}", person1.name);
    person1.greet();
    person1.change_name();
    println!("my name is {}", person1.name);
    let person2 = person1.get_name_and_consume(); // 所有权转移，上述都失效了
    println!("{}", person2);

    struct Car {
        brand: String,
        price: f32,
    }
    impl Car {
        fn new(brand: String, price: f32) -> Car {
            Car { brand, price }
        }
    }
    let car = Car::new(String::from("ford"), 13.0);
    println!("the price is {}, the brand is {}", car.price, car.brand)
}
