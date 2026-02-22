---
layout: post
title: "World Dumpling Index"
image: /assets/img/2026-02-21-world-dumpling-index/dumpling-hero.png
category: projects
tag: grad-school
---


![dumpling hero](/assets/img/2026-02-21-world-dumpling-index/dumpling-hero.png)

This was me and [Dae Kim's](https://www.instagram.com/daeyunart/) final project for NYU Connections Lab - fall 2025.
{: .caption}

[Check out the project here](https://leviv.cool/dumpling/)

[Check out the code here](https://github.com/leviv/dumpling)

When I went to Poland in 2020, I ordered pierogies for the first time. I was shocked when the sizzling cast-iron skillet arrived at the table, and I realized they were basically just dumplings. That sparked a discussion around the table where we talked about different kinds of dumplings around the world. This is hardly a new observation; Wikipedia even has a [list of dumplings article](https://en.wikipedia.org/wiki/List_of_dumplings) with hundreds of entries, and you can find many examples of [infographics](https://dumplinghunter.net/2024/01/26/around-the-world-in-50-dumplings/) showcasing various world dumplings. Yet, I wondered if I could do better. Would it be possible to find a dumpling for every single country in the world? How far would I need to stretch the definition of the word dumpling to make that happen?

## What is a dumpling anyway?

When researching dumplings from different cultures, I chose the dishes based more on vibes than any strict definition of the word. My personal idea of a dumpling is:

> A filling (sweet or savory) cooked in some sort of wrapper.

This quickly went off the rails, though. Savory foods like 'chicken and dumplings' or fufu (and its variations) are closer to the original 17th-century English definition of the word, but don't match what most people commonly think of as a dumpling today. These dumplings are steamed dough eaten with a stew or soup.

![chicken and dumplings](/assets/img/2026-02-21-world-dumpling-index/chicken-and-dumplings.jpg)

Vegan chicken and dumpling made by [Liv Vegan](https://www.livveganstrong.com/vegan-chicken-and-dumplings/)
{: .caption}

To further complicate things, most countries around the world have been changed by centuries of colonization, slavery, and human migration, which makes it hard to say what food definitively belongs to what country. For example, Bapao is a popular Suriname street food that originated in China and made its way to the South American country through Indonesian influence as both countries were Dutch colonies. Would it be offensive or incorrect to include it as a part of Surinamese cuisine? Does that highlight the unique influence the country has had on the dish, or erase its Asian roots? 

![bapao](/assets/img/2026-02-21-world-dumpling-index/bapao.png)

Vegan Indonesian bapao made from [Pisang Susu](https://pisangsusu.com/vegan-bapao/)
{: .caption}

With all that in mind, I had this mental flowchart for finding dumplings to represent each country and territory on the map:

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="450" src="https://embed.figma.com/board/0fE3OdedGTQmwNlzZqOqqA/Dumpling-flowchart?node-id=0-1&embed-host=share" allowfullscreen></iframe>

As represented in the flowchart, I prioritized finding traditional foods for countries above foods that were more dumpling-like. We currently have 276 'dumplings' from 241 countries and territories in our database. This research was pretty evenly split between Dae and me over the course of a few weeks. This was my favorite part of the project, and I loved learning about the history of dishes from around the world.

However, in user testing, we received a lot of pushback on what different people considered dumplings, especially when it came to dishes from their home country. Because of this, we made one of the core mechanics of the site a vote where you can decide for yourself whether the listed item is a dumpling or not.

![dumpling vote](/assets/img/2026-02-21-world-dumpling-index/dumpling-vote.png)

The voting screen for each dumpling
{: .caption}

And while we're on the topic, let's talk more about the actual website.

## The Website

Dae and I spent a long time brainstorming the aesthetic we wanted. We discussed the nostalgia we both held for our family's treasured recipes scrawled down on index cards. You can see the warm tones and handwritten aesthetics in our mood board.

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="450" src="https://embed.figma.com/board/4nrzL0e3vxz1VDZHbKOr4T/World-Dumpling-Index-Inspo?node-id=0-1&embed-host=share" allowfullscreen></iframe>

I’m no stranger to creating online maps (see [PutItInPark](https://leviv.cool/projects/2025/05/16/put-it-in-park.html) and [Abortion Deserts](https://leviv.cool/projects/2025/09/18/abortion-deserts.html)), and for this project, I used the same initial approach. Somewhat selfishly, we used Svelte for the website framework and D3 for the map - both frameworks that my project partner Dae had never used before.

![wip](/assets/img/2026-02-21-world-dumpling-index/wip.gif)

The first iteration of the map - you can click on countries and have them show in the sidebar
{: .caption}

Once we had the basic functionality of a map, we turned our attention to the aesthetics. We wanted the map to be an extension of the handwritten aesthetic of the index card, and I luckily found [Rough.js,](https://roughjs.com/) a library that can give SVG shapes a hand-drawn, sketchy vibe. There are many parameters to play with that influence the look and feel of the map. I added all of the relevant ones to a debug panel to allow us to prototype. If you press 'd' on the current live site, you can play with the debug panel too!!

![debug](/assets/img/2026-02-21-world-dumpling-index/debug.jpeg)

Debug view on the dumping website
{: .caption}

We attempted to find a set of parameters that looked visually appealing, while avoiding overly complicating the shape geometry, which can cause actions like panning and zooming to noticeably slow down.

## Art

In my opinion, the most impressive part of the website is the 174 unique, hand-drawn assets. When you click on a country, you'll almost always see a beautiful icon to accompany the dumpling description. Originally, Dae and I planned to split the dumpling drawings evenly between the two of us. However, as the end of semester deadline loomed larger, I took on more of the technical work, while Dae took on more of the artistic aspects. There's still about 20 of my dumpling assets in there, but they are sorely lower quality than Dae's.

<iframe src="https://drive.google.com/file/d/17YzdNFnRvKMlMpLDH0BtsM7dwm7s3RVi/preview" width="100%" height="480"></iframe>

Timelapse of dozens of dumplings Dae drew
{: .caption}

From [Dae's documentation](https://www.notion.so/World-Dumpling-Index-2aa525646c0a80139c7ced963e57d58c)

> My “typical” process: sketch, lines, colors, shading/highlights, post-production edits.  For the dumplings, my process was: lines, colors, random bullshit GO!!
>
> As a disclaimer, I drew these on a small canvas since I didn’t know how big they’d be on the page. For most projects, I draw large and shrink as needed, but this time I drew small since there would be over 100+ dumplings (and thus 100+ files unless we compiled into a sprite sheet).
>
> I took advantage of the small size to be honest and tried to create the “look” of details without actually creating them.

Dae also designed the landing page graphic, the recipe box, and our logo. Basically, if anything looks good on the website, it was Dae's doing.

![dumpling hero](/assets/img/2026-02-21-world-dumpling-index/dumpling-hero.png)

Our intro page with a recipe box, background, and logo
{: .caption}

## Reception and Reflection

This site was an enormous undertaking. There were hundreds of points of research, drawings, and a fully interactive map and voting system. I am extremely proud of what we completed in less than two months. I found myself discussing dumplings in day-to-day life and got the chance to talk to dozens of people in New York City from around the world about which dumpling they considered representative of their country.

An informal feedback session came when I posted the link in the Figma #random Slack channel.

![slack message](/assets/img/2026-02-21-world-dumpling-index/slack-message.png)

158 passionate replies
{: .caption}

I had a coworker who shared a [children's book](https://www.amazon.com/dp/1797216929?social_share=cm_sw_r_ffobk_cp_ud_dp_ZT8ADH19G06MB43B7ZP1&bestFormat=true) they had written to highlight dumplings from around the world. Some other gems from the thread include:

> is a chimichanga a dumpling?
>
> maybe a penguin egg is a (crunchy, illegal) raw antarctic dumpling
>
> This is incredible. Truly important sociological archival knowledge here 
>
> going into a bathtub is basically a wonton soup. especially if you add bath salt

Along with this knowledge drop.

![dump](/assets/img/2026-02-21-world-dumpling-index/dump.png)

Plato and Aristotle could never
{: .caption}

I also posted the website on [r/web_design,](https://www.reddit.com/r/web_design/comments/1poao6t/a_friend_and_i_made_a_map_of_world_dumplings/) where I got relatively few upvotes but hundreds of visitors and some submissions to our feedback form! Someone even wrote about us as their ‘[website of the day](https://www.geekinheels.com/world-dumpling-index/).’

All of this just highlights the real joy of this project. Starting conversations and debates about food and learning about lots of tasty things along the way. I have already had heartwarming interactions with people who were shocked to see their favorite childhood food on the website, and watched so many people discover new foods from around the world.

For future work, the site currently has some bugs, and the mobile version in particular could use some love. I want to see this project expanded and continued, and hope to make this the best version it could be!