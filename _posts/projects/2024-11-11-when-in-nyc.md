---
layout: post
title: "When in NYC"
image: /assets/img/2024-11-11-when-in-nyc/preview.png
category: projects
miscellaneous: projects
---

[GitHub Repo](https://github.com/leviv/winyc)

[Demo Link](https://leviv.cool/winyc/)

![preview](/assets/img/2024-11-11-when-in-nyc/preview.png)

Site Preview
{: .caption}

A few years ago, I stumbled across my friend Sharon Zheng's [NYC guide](https://sharonzheng.com/winyc/). Creating my own version of this guide has been bouncing inside my head for a while. Even after three years of living in New York - I've still only seen a fraction of what the city has to offer. Still, I was tired of not having a ready answer when people asked for recommendations when visiting.

Building off Sharon's codebase, I wanted to make the project more extensible and maintainable. I started by splitting the code from a single index.html to a Svelte project made of a few different components. I then created a `data.json` file, which is used to power the entries on the site. Any editing, adding, or removing items to the list would only need to change this one file.

I also added a short description section to each entry (I had to tell people my favorite menu items) and added a true mobile experience.

![mobile](/assets/img/2024-11-11-when-in-nyc/mobile.png)

Mobile experience
{: .caption}

Hopefully, this will be a living project I will continue to update as my relationship and experience with the city changes. In the meantime, please check out any of the places listed on the site - I promise they are more than worth the trip.
