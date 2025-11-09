---
layout: post
title: "WikiMystery"
image: /assets/img/2025-11-09-wikimystery/wikigame.png
category: projects
tag: projects
---


[Try out the game!](https://leviv.cool/wikigame/)

[View the source code](https://github.com/leviv/wikigame)

![wikigame](/assets/img/2025-11-09-wikimystery/wikigame.png)

Screenshot of the game experience
{: .caption}

## Introduction

A few weeks ago my friend [Lucy](https://lyuu.cc/) told me about a Wikipedia Game Jam happening soon in Brooklyn. The tagline was

> Join developers, designers, and Wikipedia enthusiasts for a weekend of creative hacking. We're building games and interactive experiences powered by the world's largest encyclopedia.

As someone who loves Wikipedia, game jams, and weird tech events, I knew I had to go. I showed up to the event early, where I was greeted by an amazing spread of food and drinks, and met a mixture of software engineers, game designers, Wikipedia editors and more. The venue it was hosted at, Hex House, a community space and artist workshop in Bushwick. The first night we had a series of great talks about art, code, and Wikipedia, and I left feeling very inspired.

The next day, we started work on the project in earnest. I had partnered with my friends Lucy and Justin on a murder mystery game. The idea came from a text Lucy sent me right before the event.

![Text conversation   "it'd be fun to make a detective game"](/assets/img/2025-11-09-wikimystery/text.png)

The text in question
{: .caption}

I had also invited my friend Amanda and her friend Melissa to the event, and to my surprise they were also down to work on the idea. 

We started my brainstorming the game mechanics and the vibe we wanted to go for. It was fun to hear about the mystery and detective games that my friends had grown up with, most of which I had never heard of. The biggest inspiration for this project was Papers, Please, where you play as an immigration inspector sorting through travelers documents.

![FigJam brainstorm document](/assets/img/2025-11-09-wikimystery/figjam.png)

A FigJam brainstorm
{: .caption}

I was psyched to start developing, but once we actually began, my excitement turned to dread. I decided this environment would be the perfect opportunity to try out AI assisted coding tools, (Claude Code, Figma Make), but prompting anything beyond extremely basic tasks led to an endless cycle of bugs, incorrect code, and frustration. In addition, one of my teammates became unconvinced that the format of the game would work, and asked me many questions about the Wikipedia API, and game mechanics that I did not have the answer to. They tried to pivot the direction of the game multiple times, and all this led me to become frustrated to the point of near tears. I fell silent and realized all at once that I was not having fun - in fact I was about to have a panic attack. Because of the thrash my original group decided to work on a separate idea, for which I do not blame them.

I excused myself from the event and went to get a sandwich and go to the climbing gym to destress for 5 hours. After that I felt way better but was still left with the fact that I had a vibe coded mess on my hand and only ~15 hours to make a usable demo for the game jam. At this point, I strongly considered just going to bed and calling it a night. However, I thought back to the team member who seemed convinced that the game would not work, and that desire to prove them wrong is what fueled me to work through the night to deliver a finished game.

## Fetching the data

This part of the codebase is a mess. I started by almost entirely vibe coding the API calls, which all query `https://query.wikidata.org/sparql`. There are undoubtedly way better ways to do this, but I structured the query like this:

```sql
SELECT ?person ?personLabel ?causeOfDeath ?causeOfDeathLabel
WHERE {{
  ?person wdt:P31 wd:Q5.  # human
  ?person wdt:P509 ?causeOfDeath.  # cause of death

  SERVICE wikibase:label {{ bd:serviceParam wikibase:language "en". }}
}}
OFFSET {{offset}}
```

This essentially selects all humans in Wikidata (the structured data source that powers wikipedia) that have a cause of death. There's also a handy [data exploration tool online](https://query.wikidata.org/) that I tried first to ensure that my queries would work on a larger scale. I let this query run (in batches to avoid rate limiting) for over an hour while I climbed, and when I was done I had a csv file with over 100,000 people.

I then ran some queries to figure out the most common causes of death, and spent over an hour removing all of the "boring ones". I struck all of the causes of death that were common medical diseases (cancer, tuberculosis, etc), suicide, or too obscure to be recognizable. I also further cleaned the data by only including people with images, and created a cleaned json file that contained an entry like this.

```json
{
    "person": "http://www.wikidata.org/entity/Q461814",
    "personLabel": "Jan Marek",
    "birthDate": "+1979-12-31T00:00:00Z",
    "deathDate": "+2011-09-07T00:00:00Z",
    "gender": "male",
    "photo": "https://commons.wikimedia.org/wiki/File:Jan_Marek.JPG",
    "placeOfBirth": "Jindřichův Hradec, Czech Republic",
    "placeOfDeath": "Tunoshna, Russia",
    "citizenship": "Czech Republic",
    "occupation": "ice hockey player|athlete",
    "article": "https://en.wikipedia.org/wiki/Jan_Marek_(ice_hockey,_born_1979)",
    "causeOfDeath": "http://www.wikidata.org/entity/Q182085",
    "causeOfDeathLabel": "2011 Lokomotiv Yaroslavl air disaster"
  },
```

This left me with a dataset of over 10,000 people, and 400+ causes of death, more than enough (in my opinion) for a game like this. And keep in mind, this is with extreme time constraints! There's many more Wikidata fields I didn't touch, like religion, awards received, education, religion and more that could have made this game a richer experience.

## Creating the Experience

From the beginning, I envisioned this game having simple mechanics with a very strong theme. I wanted it to look skeuomorphic, and give the feeling that you were shuffling clues around, connecting the dots in a physical way. and I started by designing the game in Figma, and thought this could be a great time to try out one of Figma's newest products, Figma Make.

![Figma prototype](/assets/img/2025-11-09-wikimystery/figma.png)

Initial Figma design
{: .caption}

The explorations with Figma Make ended like most of my other attempts using vibe-coding tools; frustrating, low-quality, and a complete waste of time. But once I got that out of my system, I began crafting a much more tangible Svelte app. The frontend itself was pretty simple, some draggable components and buttons on a bulletin board. What was more notable however, was the fact that nearly all the assets were hand-drawn by me or [Lucy](https://lyuu.cc/). We used our iPads and procreate to craft the icons, buttons, and draggable documents that you seen on the web page

![buttons with cute icons](/assets/img/2025-11-09-wikimystery/buttons.png)

I love the way that these icons turned out
{: .caption}

After a frantic last few hours of getting all the assets together and editing the causes of death list, the time finally came for the demo.

## Reception

Running off of just a few hours of sleep - I'll be honest and say that I don't quite remember exactly what I said. What I do remember though, is the amount of people that were enamored by the idea and came up to me after presentations to try it out.

![presentation](/assets/img/2025-11-09-wikimystery/presentation.JPEG)

Picture of me during game demos and presentations
{: .caption}

The idea had worked even better than I expected. Even given a few data points about a persons life, players were able to reason with each other about what the cause of death could be with surprising accuracy. In fact, the first ever play tester managed to a streak of 8 questions right on their very first attempt. I felt relived that the idea had worked, and let go of the knot of self-doubt that was tied up in my stomach ever since I had left my group to pursue this idea. 

![demo](/assets/img/2025-11-09-wikimystery/demo.png)

Trust me, there was even more people out of frame shouting answers and tips to solve the mystery
{: .caption}

I ended up winning the prize for the category "**👻** **The One That Haunts Me (In a Good Way)**". The project was shown at the 12th annual WikiConference North America, and is now hosted on the official [Wikipedia Itch page](https://teamwikipedia.itch.io/wikimystery) (pw: wikigamejam). It was great to be a part of a community that has given so much knowledge to the world, and I'm glad I fought through the difficulties to deliver a project I am proud of, that has entertained my friends for countless hours. I learned a lot of lessons for my next game jam, and feel better equipped and more inspired for wherever my next work takes me.
