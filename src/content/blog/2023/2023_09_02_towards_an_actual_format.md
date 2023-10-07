---
title: "Newsletter Issue 3: Towards an Actual Format"
publishedDate: "2023-09-02"
description: "The third issue of the Crusty Rustacean Newsletter, settling on a format"
categories: ["newsletter"]
tags: ["issue 3"]
---

Welcome to the September issue of The Crusty Rustacean! I'm still finding my voice (and a format/structure) so please bear with me for the first few issues. I don't want to overwhelm you, dear subscriber, with too much rambling, so I will likely keep these very short and sweet.

## In this Issue:

- What's New in Rust?
- Crate Highlight of the Month
- What Did I Learn in August?
- What Did I Build in August?
- Learning Goals for September

## What's New in Rust?

The Rust team diligently releases a new version every 6 weeks. In late August, we saw version 1.72 hit prime time. You can grab the low-down right from the [Rust Blog](https://blog.rust-lang.org/2023/08/24/Rust-1.72.0.html)

An important note regarding future Windows compatibility came as part of the news. The team stated that Rust 1.75 will be the last to support Windows 7, 8, and 8.1. When Rust 1.76 reaches us in early 2024, Windows 10 will be the minimum supported version.

If you're not on Windows 10 by now, sorry, you're just crazy...I judge you...

## Crate Highlight of the Month

In each newsletter issue, I'll try to highlight a crate from the Rust ecosystem, the epicenter of which is [crates.io](https://crates.io/). There are many, many community built tools that help Rustaceans in their day to day software development journey. I'm just beginning to crack the surface and what's what.

[Zellij](https://crates.io/crates/zellij) is the crate of the month. It's a so called "batteries" included terminal (aka a terminal multiplexer) which can for the foundation of a developer workspace. From within any terminal (such as Windows Terminal running the Windows Subsystem for Linux) you can start up Zellij and have multiple sub-windows which you can rearrange and organize to create the perfect environment. These sub-terminals can house your Neovim sessions, command line tools, anything you can dream of. Zellij is what I call a true "force multiplier". Zellij can be installed as a binary via Rust's package manager, `cargo`. The documentation for this crate is top notch and I found it very easy to get started and be productive.

## What Did I Learn in August?

I feel like my basic foundations in Rust are getting stronger with each passing month. I'm bound and determined to be self-sufficient and productive with Rust as my primary language. I feel like each passing day is one step closer to that goal. July was actually the breakthrough month. I spent a lot of July adding a few new methods to the persist feature of [Shuttle](https://shuttle.rs/). Through that work the following aspects became far more solid:

- converting errors using the thiserror crate
- file input and output
- listing directory contents and dealing with potential failures through the `Result<T, E>` type
- unit testing

Unit testing was perhaps the biggest win. Before July, I was really just going through the motions, I couldn't implement tests on my own. Now I feel like I'm 50% there.

## What Did I Build in August?

I think the thing I'm most proud of is the command line [markdown-html-rs](https://github.com/sentinel1909/markdown-html-rs) CLI tool that I wrote near the beginning of August. It's a very simple thing that takes a markdown file as input, and outputs the corresponding HTML content into a file. I enjoy writing content in markdown and wanted something easy to get markdown content ready to issue as part of this newsletter. My newsletter API for accepts plain text and HTML. I find it a huge pain to write one and then code the other, there's always a tag or something that I miss. Now I can write in markdown, use that as the plain text version, then feed the markdown through my converter to get the HTML, which I can cut and paste into the API form.

Eventually, I'd like to write a full fledged editor and have it integrated right into the API. I'm along ways from that though...

## Learning Goals for September?

I hope to learn more about security for web APIs. Knowledge of how to make an API secure is severely lacking for me. Earlier in the year, I followed along in Zero to Production in Rust, implementing session based authentication for my newsletter API. I can't say I'm anywhere near "rolling my own" security. I don't think I want to. It's likely better to learn from someone who has, "stared long and hard at the problem".

I think this article, penned by Joshua Mo from the Shuttle Team, will be front and center. [How to Implement OAuth in Rust](https://www.shuttle.rs/blog/2023/08/30/using-oauth-with-axum)

## The Obligatory Call to Action

What are you learning? What challenges are you facing learning Rust? What are your learning goals? Sound off and email me using the [contact form](https://newsletter.crusty-rustacean.dev/) on the Crusty-Rustacean newsletter sign-up site.

Thanks for reading! See you next month!
