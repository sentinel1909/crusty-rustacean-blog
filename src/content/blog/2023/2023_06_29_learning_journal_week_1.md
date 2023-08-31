---
title: "Rust Learning Journal Week 1"
publishedDate: "2023-06-29"
categories: ["journal"]
tags: ["generics"]
---

Over a week ago, I started a "Rust Learning Journal" inspired by the [How to Learn Rust](https://learning.accelerant.dev/how-to-learn-rust) course by Tim McNamara. Unfortunately, my attention for Tim's course hasn't been the greatest, as I found myself diving back into Zero to Production in Rust. That project will be complete soon, so I'll eventually circle back to Tim's content.

The other thing started this week is, hopefully, my first contribution to the [https://shuttle.rs](shuttle.rs) code base. I've been assigned a small improvement in one of the resource modules. I'm scratching my head pretty mightily right now, I've probably bitten off more than I can chew, but we'll see how it goes.

In brainstorming the issue I'm trying to work, I had a sudden revelation about generics, which is something I struggle with a lot. Here's a code snippet I played about with yesterday:

```Rust
// a struct type to represent a thing with 3 fields, the struct and its fields are annotated
// with a <T> to denote it is generic for any type T.
struct RandomThing<T> {
    key1: T,
    key2: T,
    key3: T,
}

// an implementation block, which has one method which simply converts the struct into a vector, the elements of the vector are the struct's fields
impl<T> RandomThing<T> {
    fn convert_to_vector(&self) -> Vec<&T> {
        vec![&self.key1, &self.key2, &self.key3]
    }
}

// main function
fn main() {
    let random_thing = RandomThing {  // create an instance of our struct type
        key1: "this is key 1",
        key2: "this is key 2",
        key3: "this is key 3",
    };

    // call the convert_to_vector method
    let converted_random_thing = random_thing.convert_to_vector();

    // get the length of the resulting vector, corresponds to the number of fields in the struct
    let length_of_converted_thing = converted_random_thing.len();

    // print the number of keys
    println!("Number of Keys: {}", length_of_converted_thing);

    // iterate over the vector, print out each element
    for val in converted_random_thing.iter() {
        println!("Value: {}", val);
    }
}
```

This all started because I was thinking about the notion of how to convert a struct, with several fields, into something that could be iterated on. Then things went really wild...I asked myself, could this be generic?

It can...

Anyways, I was pretty pleased with myself, as the fog around generics may be starting to clear just a little bit. Little theoretical exercises such as this are a useful learning tool. I can see why generics are powerful, they allow for nice abstraction of code.

Unfortunately this revelation hasn't helped me solve my assigned Shuttle issue. The sweating and bulging of forehead on that continues.
