---
layout: post
title: "HTML Energy Freewrite NYC 2024"
image: /assets/img/2024-08-06-HTML-Energy-Freewrite/website.png
category: projects
tag: personal
---

# HTML Energy Freewrite - NYC 2024

Check out the project and the code [here!](https://leviv.cool/html-energy)

According to [html.energy](https://html.energy/events.html),

> _HTML Freewrites are events in which people get together and write HTML documents!_

I stumbled across this event accidentally. I went to the New York City Museum of Modern Art (MoMA) with some friends from [ITP Camp](https://tisch.nyu.edu/itp/admissions/camp), including [Omar](https://x.com/rsnous), one of the event organizers. We took the train down to Brooklyn and Ubered the last mile to Red Hook, where the meetup happened.

![museum](/assets/img/2024-08-06-HTML-Energy-Freewrite/museum.png)

MoMA shenanigans
{: .caption}
I had spent the day at the MoMA and in the subway drawing pictures of the exhibits and my friends in my notebook. As I sat among other web enthusiasts at the HTML picnic, I had the idea to write a small HTML document from scratch by hand and then transcribe it into an actual website. And that’s what I did!

![sketch](/assets/img/2024-08-06-HTML-Energy-Freewrite/sketch.png)

Sketching each other on the M train. We also [made a tiktok about it](https://www.tiktok.com/@villarreallevi/video/7391438276831300894)
{: .caption}

Writing HTML by hand is definitely a lost art form. I thought back to when I first learned HTML without auto-closing tags, StackOverflow, and color coordination. Writing on a 2013 Macbook Air in Text Wrangler, hunting through the lines of code for a single erroneous closing bracket messing with my layout. I thought back to a story I remember from the Micheal Lewis book Flash Boys, where a Russian programmer opines that he and his compatriots were so good at coding because of their limited computer access as students. They would spend hours perfecting their code by hand while waiting in a long queue for a small time slot where they could type their subroutine into the computer.

That being said, this project falls short of the idealistic 100% artisinal handmade standard. I looked up on my phone the correct syntax for the proper `meta` tags to make the website more accessible and the specific way to turn an emoji into a favicon.

![website](/assets/img/2024-08-06-HTML-Energy-Freewrite/website.png)

Writing HTML with a beautiful Brookyln sunset
{: .caption}

## Bugs

My code was not perfect.

1. I mistakenly wrote `viewbox` instead of `viewBox` for the favicon SVG.
2. I used a black border around the image without the CSS property `box-sizing: border-box;` - which caused the page width to be 30px too long, with an infuriatingly large horizontal scroll wheel.

Both of these problems are fixed in the live version of the website.

## P.S.

- During this event, I found out about the Donald Trump assassination attempt.
- After this event, I Citibiked from Red Hook to Sunnyside, Queens - one of the longest Citibike journeys I’ve taken to date.

![bike ride](/assets/img/2024-08-06-HTML-Energy-Freewrite/bike-ride.png)

Citi bike summer
{: .caption}
