---
title: "Deployment is a Dirty Word...Reloaded"
publishedDate: "2023-05-10"
description: "An article with further thoughts on deployment of Rust software"
categories: ["deployment"]
tags: ["shuttle"]
---

## The Promise of Rust

The Rust programming language has evolved into a capable, multi-purpose tool which brings the guarantees of performance, reliability, and productivity. It is a language which empowers "everyone to build reliable and efficient software".

## Impediments to the Promise

The beautiful promise of Rust is tarnished by the "D" word...deployment.

There aren't many simple, cost-effective deployment solutions for Rust apps. Many modern cloud hosting providers allow Rust developers to deploy their creations, after a great amount of work. Consider the potential overhead:

- create a database, likely with a deployment script, while not difficult, it's another "thing" to manage
- create multiple configuration files, to manage development and production environment variables
  - may bring in the need for dedicated crates, such as config, into the project
- create and manage a Docker configuration file, to encapsulate the build and runtime environment
  - learning curve
  - fiddly factor, trial and error needed to optimize build performance
- create and manage a host specific configuration file
  - i.e. spec.yaml for Digital Ocean deployments
  - another learning curve
  - another fiddly factor, takes additional time and effort to understand and tweak the host specific configuration
- possible addition of crates, with the associated increase in dependencies, to manage all of the build tools...yet more overhead

None of the above is necessarily a show stopper, and it is possible to get used to it and work it into your flow, but all of it together adds more things that could go wrong. Rust has a steep learning curve. It can take time and dedication to become proficient with it. Why add more barriers and complexity?

## Launch with Shuttle

Is it not preferable to find a solution that lowers the barriers and does the heavy lifting for you? We need to get back to Rust's core promise of productivity. Fortunately, there is a better way. Head over to [Shuttle](https://shuttle.rs) to learn more.
