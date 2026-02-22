---
layout: post
title: "Non-AI Image Generation"
image: /assets/img/2026-02-22-non-ai-image-generation/image-generation.png
category: projects
tag: grad-school
---


![image generation](/assets/img/2026-02-22-non-ai-image-generation/image-generation.png)

A screenshot of the image generation interface
{: .caption}

This project was made with Queenie Wu as the second midterm project for NYU Connections Lab. 

[Visit the project here](https://leviv.cool/quale/)

[Read the project write-up here!](https://queeniwu.notion.site/Midterm-Project-2-29eb6cf74c4780a88a8ec4313e6b15e6)

## Technical details

We're using [lowdb](https://github.com/typicode/lowdb) to structure our data, and have a simple node backend that runs a Discord bot to notify us in a private server when a request is sent, and send our reply picture back to the server.

There's a lot more details in the documentation link above!