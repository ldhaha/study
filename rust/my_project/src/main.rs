use rand::Rng;
mod apple;
mod fruit;
mod orange;
mod pear;
fn main() {
    apple::eat_apple();
    pear::eat_pear();
    orange::eat::eat();
    fruit::fruit::banna::eat_banna();
    let gen = rand::thread_rng().gen::<i64>() % 2;
    if gen == 0 {
        println!("hello")
    } else {
        print!("world")
    }
}
