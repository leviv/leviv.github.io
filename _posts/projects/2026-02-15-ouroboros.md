---
layout: post
title: "Ouroboros"
image: /assets/img/2026-02-15-ouroboros/ouroboros.png
category: projects
tag: grad-school
---


<iframe width="100%" height="400" src="https://www.youtube.com/embed/L1A-TUjEWKQ" title="Ouroboros Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Gameplay trailer
{: .caption}

[View the source code](https://github.com/leviv/ouroboros)

In January 2026, I spent two weeks in Berlin for the January term of [NYU IMA Low-Res](https://itp.nyu.edu/lowres/). It sounded like an insignificant amount of time, but we were truly able to cram an extraordinary amount of content into those short two weeks. In addition to a Conversations: Berlin class, I chose the elective [Designing Games](https://github.com/periode/designing-games/wiki), which met daily for three hours, with additional homework assigned every night and on weekends.

## Proposal

In the first week of class, we learned the basics of game design theory and Unity. In the second week, we learned by working on our final group project, which was to be shown at the end-of-semester student showcase. To form groups and generate ideas, each class member had to put together a short game proposal. Mine was based on the assassination of Charlie Kirk:

![proposal](/assets/img/2026-02-15-ouroboros/proposal.png)

Mood board/proposal for a micro single-action game
{: .caption}

However (understandably), no one else was interested in joining me to build this game, so I instead looked to join another project. One of my classmates, Nate, shared a single bullet point that captured my attention:

> a reverse snake game, where the snake has to eat itself to remain small enough to advance to other sections

My first two thoughts when hearing this proposal were:

1. This sounds like it could be very narratively compelling
2. This gameplay sounds extremely doable in the week-long time frame we were working with.

We found another interested classmate, Anna, and started planning the game.

## Planning, Brainstorming, Prototyping

We started with a brainstorming whiteboard to align on the vibe, mechanics, and story for the game.

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="450" src="https://embed.figma.com/board/ybiwNvEvJJFOrrt5GSTGtU/Game-Dev-brainstorm?node-id=0-1&embed-host=share" allowfullscreen></iframe>

Some of the core decision points included:

- 2D or 3D?
- Multiplayer or single player game?
- What would the snake/food/hazards look like?

We had not yet made a decision for each of these questions, and knew that we had more play-testing to do before making informed decisions. Nate (a project management pro) put together a document to track all of the moving pieces we had going on, and we divided up the different areas of responsibility among ourselves

![image 20260215123606764](/assets/img/2026-02-15-ouroboros/planning.png)

A very detailed Google Sheets project tracker.
{: .caption}

Initially, I was responsible for the core snake gameplay mechanics and the 3D assets for the game. This was a good mix of my strengths - programming the movement and object interactions, and my weaknesses - I had not done much 3D modeling in over a decade. To test the core gameplay and ensure that a snake eating itself could be both fun and challenging, my first prototype was a [p5.js sketch](https://editor.p5js.org/leviv/sketches/U1yvlHHAl) that implemented the core mechanic of snake eating itself. This gave me some idea of how to program the snake, and allowed me to tweak different parameters to find what would be fun much more easily than making those same changes in the Unity game engine.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/Othfqn2mXec" title="Ouroboros pixel gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Once I finished that prototype, I began making the game in Unity 3D. I found a [great tutorial](https://www.youtube.com/watch?v=iuz7aUHYC_E&t=23s) to follow that showed how to do this and used it to create the first playable versions of the game in Unity. Anna worked on the first version of the player-two controls to kill the snake.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/Bvylo_1eLxI" title="Ouroboros development" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

As you can see, in this version we have hazards (black cubes), food (gray spheres), and the two players with their respective controls. From here, it was all about polish and juice.

## Polish

As stated above, I was initially responsible for the 3D models for the game. Given our limited amount of time and my limited 3D experience, I sought to achieve a more cute, low-poly aesthetic rather than aiming for photo-realism. I used [Womp](https://www.womp.com/) to create low-poly versions of the snake, food (mouse), and found/edited an open-source sword model.

![snek](/assets/img/2026-02-15-ouroboros/snek.png)

3D snake model
{: .caption}

![mouse](/assets/img/2026-02-15-ouroboros/mouse.png)

3D Mouse model
{: .caption}

![sword](/assets/img/2026-02-15-ouroboros/sword.png)

3D sword model
{: .caption}

I am new to 3D modeling, so these relatively simple models took me many hours to create, and I was very proud to show them off to my project partners when I was finished. However, when I shared in the group chat, there was immediate pushback:

![text](/assets/img/2026-02-15-ouroboros/text.png)

Text after sharing the snake design
{: .caption}

When I had tried to start a conversation the previous day on the aesthetic direction of the game, my teammates agreed that we should have a strict division of tasks, and the individual working on story, art, or modeling would decide on the direction themselves. However, upon sharing my work, Nate and Anna both strongly wanted more realistic models, something that was at odds with the previous assets we had agreed upon. I saw an inherent tradeoff for more realistic assets vs more polished and precise gameplay. Because our snake had to be able to grow and shrink in size, it made it extremely difficult to use existing free 3D assets that were fixed sizes. In addition, any realistic 3D models we used would require more complex colliders and more possibilities for janky gameplay.

I ended the day frustrated that an entire day's worth of work was essentially for nothing, and really confused at the lack of alignment on our team. I scheduled a team meeting with our teaching assistant specifically to align on game direction and intentions. I came prepared with a list of aesthetic points to align on, but throughout the  meeting, I got very little discussion from my teammates, even when I directly asked for their input. Their faces buried in their laptops throughout the hour-long discussion, it felt much more like a 1-1 meeting between me and the TA rather than a group effort, with the occasional "yeah, that sounds fine." 

Unfortunately, this was a pattern for the rest of the project. My teammates would meet without me, make decisions when I wasn't present, and assign work to each other, leaving me very little to do. When I raised concerns about gameplay, I was systemically voted down 2 to 1. At first, I thought I was seeking too much control over the game, and tried to turn the project into an exercise in implementing others' creative direction. However, as the days went on, I found I was not just being overruled, I was being ignored. This was especially confusing to me because I was far from a deadbeat project partner. I had written nearly every line of code in our codebase and had stepped in to solve problems where the other two couldn't. 

I found myself feeling very detached from the game I was working on. It was something I had put dozens of hours into, but I didn't feel any ownership. For the last few days, any work I did was discouraged by my teammates until they saw my results. They and external testers would immediately agree that my changes made the gameplay far superior.

## What went wrong / what could I have done better?

I don't think either of my teammates was intentionally trying to be rude or had a vendetta against me to minimize my contributions. However, there are factors that could have led to this mismatch in team dynamics.

- On the first weekend of the program, I underestimated the work my teammates were putting into the project. I am unsure if they met without me, but from their perspective, perhaps I did not sufficiently contribute to the mood board and planning document. That could have led them to take my ideas less seriously than their own. Also, I think my two project partners were better friends with each other than with me, which makes it a lot easier to have sidebar conversations or meet without me.
- Both my partners had more formal art and media backgrounds than I do. I also had exponentially more coding experience than they did. I have found that this mismatch can often lead to getting pigeon-holed into just working on technical tasks.
- The biggest factor was that I did not talk with my project partners about my feelings. I hinted at it and alluded to it, but never directly told them that I was feeling really invisible and devalued as a member of the team. At the time, I felt that I just had to stick it out for a few days and then it would be over. Looking back, even though it was a short project, it would have been worth it to have that discussion and ensure that future collaborations would go smoothly.

And lastly, it was a reminder to check my ego in group projects. I would find myself getting frustrated to the point of migraines over a small game that was, at the end of the day, pretty inconsequential. The negative feedback loop left me completely drained at the end of the semester, and presenting a project that I felt entirely detached from.

## Reception

The January semester culminated in a three hour open house at DOCK 11 in Berlin.

![open studio](/assets/img/2026-02-15-ouroboros/open-studio.jpg)

Open studio poster
{: .caption}

We had a setup of a large monitor connected to our laptop, with a controller controlling the machete, and the laptop controlling the snake. Throughout the showcase, we had a few dozen people try the game, and for the most part, attendees were able to grasp the controls quickly and have fun competing against their friends for a 3-5 minute gameplay session. I was surprised by how many people enjoyed playing it! The sound effects I added and the satisfying snake movements and machete 'thud' added a lot to the satisfying feel of the game.

![showcase](/assets/img/2026-02-15-ouroboros/showcase.png)

Attendees play testing the game.
{: .caption}

The constructive feedback we heard from attendees and our professor was aspects of the game I had also sought to change.

- The collision mechanics and outer bounds were not very clear. Many games ended because the player controlling the snake kept falling off a hidden game floor.
- The story was convoluted and lost on most of the players. We should have incorporated more thematic storytelling elements into the gameplay instead of just the start and end menu.

For the reasons discussed above, I don’t have any intentions to continue work on this game, but I am glad for the opportunity to learn Unity. As always, learning by doing taught me quicker than lectures could, and I am proud of the work I contributed to the project. Without my contributions, the game would simply be an empty environment with a broken machete and a start and end menu that did not work. There are many lessons I will take away from this project, both technical and interpersonal.

Again - here's the trailer for the final gameplay.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/L1A-TUjEWKQ" title="Ouroboros Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
