fn main() {
    enum Color {
        Red,
        Green,
    }

    enum FruitBox {
        Apple(Color),
        Pear { color: Color, price: f32 },
    }

    let apple = FruitBox::Apple(Color::Red);
    let pear = FruitBox::Pear {
        color: Color::Green,
        price: 32.4,
    };

    println!("pear is {} {}", pear)
}
