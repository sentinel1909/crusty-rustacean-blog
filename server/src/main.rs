// src/main.rs

// dependencies
use rocket::{Build, Rocket};
use rocket::fs::{relative, FileServer};

// function to create rocket instance
fn create() -> Rocket<Build> {
    rocket::build().mount("/", FileServer::from(relative!("dist")))
}

#[shuttle_runtime::main]
async fn main() -> shuttle_rocket::ShuttleRocket {
    let rocket = create();

    Ok(rocket.into())
}
