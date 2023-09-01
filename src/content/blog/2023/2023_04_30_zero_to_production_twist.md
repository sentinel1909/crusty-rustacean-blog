---
title: "Zero to Production in Rust...with a Twist"
publishedDate: "2023-04-30"
description: "A progress update on my first offical Rust project"
categories: ["projects"]
tags: ["API"]
---

I've been learning Rust very seriously for about the last year. I sometimes still dabble with JavaScript, but increasingly I've decided Rust is where it's at. I would very much like to be a full stack developer in this language.

A project I embarked on early in 2023 is to follow [Luca Palmieri's](https://www.lpalmieri.com/) marvelous book, [Zero to Production in Rust](https://www.zero2prod.com/), but in Axum instead of Actix. I'm doing this because I have tendency to just "race to the end" without actively thinking about what I'm doing, when I code along with others. In forcing myself to make adjustments where the frameworks are different, I have to think and adapt, which helps my overall learning.

The repo is here: [sentinel1909/crusty-rustacean-api](https://github.com/sentinel1909/crusty-rustacean-api)

It's been difficult in parts. Chapter 8 caused particular consternation, due to one missing tracing::error! line within one of the error IntoResponse implementations. Axum lacks as solid an error handling philosophy as in Actix. It's a choice, I get it, but I think the fact that Actix helps you carry errors through and deal with them accordingly is preferred.

I'm on Chapter 10 now, which covers authentication. This is an important chapter for me, as it's an area I don't understand too well. I'm purposely going kind of slow with it so that the material hopefully sticks better.

There's a file called progress.md, in the root of the project, where you can read my progress.

Feel free to beg, borrow, and steal from this repo however you need or want to. I hope my journey helps you on yours.
