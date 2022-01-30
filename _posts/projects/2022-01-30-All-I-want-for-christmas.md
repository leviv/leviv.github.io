---
layout: post
title: "All I want for christmas"
image: /assets/img/2022-01-30-All-I-want-for-christmas/final.png
category: projects
miscellaneous: projects
---

![Final website screenshot](/assets/img/2022-01-30-All-I-want-for-christmas/final.png)

The final website, although it will look different depending on the time of year you visit it!!
{{: .caption}}

View the code [on GitHub](https://github.com/leviv/christmas) and check out a live demo of the project [here](https://leviv.me/christmas/)!

## The Idea

On a typical day of browsing the internet in early December, I came across a [holiday fish website](https://sunday-desert.github.io/holiday-swim/#/), which I couldn't seem to get out of my head. It was a simple, whimsical idea, but it was implemented beautifully. And since christmas was coming up, I was in a festive website-making mood. I sent the website to my friend/coworker [Amanda](https://amandayeh.com/), who appreciates these websites (almost) as much as I do.

![Me proposing the project to amanda](/assets/img/2022-01-30-All-I-want-for-christmas/chat.png)

Ignore the time that this message is sent
{{: .caption}}
The original idea came from a meme that seems to get reshared every year, showing the popularity of 'All I want for Christmas is You.' The idea that you can predict the proximity to christmas via a Mariah Carey Song was amusing to me - and plus, I just really liked the song.

![Meme showing the uptick in Google Trends for the song starting in November](/assets/img/2022-01-30-All-I-want-for-christmas/trends.jpg)

Meme showing the uptick in Google Trends for the song starting in November.
{{: .caption}}
While I was in college, December brought finals instead of normal holiday activities, and I was often too stressed to properly feel Christmas-y exams were over, usually just a few days before christmas. I wanted to capture the Christmas feeling I had as a kid, where each day seemed to be more festive than the last until it culminated on Christmas morning.

## The design

After deciding on the website's theme, Amanda and I got to work designing what the website would look like. I opened up Figma and had a first go of what I envisioned the website could look like:

![first draft](/assets/img/2022-01-30-All-I-want-for-christmas/first-draft.png)

Big 'graphic design is my passion' vibes.
{{: .caption}}

The main thing I wanted to convey with the design was the proximity to christmas via the album opacity, volume, and countdown. I also wanted to employ an interactive element for the user to fiddle with while visiting the site - because it's something that I enjoy when visiting websites. As for the design, I thought the idea of doing a very minimal, early 2000s Esque aesthetic could be interesting, hence the colors in the 'Eve' trail.

After walking through my ideas with Amanda, she proposed the idea of making the website as festive as possible by adding Christmasy colors, drawings, and fonts. I wasn't immediately on board, but I was hooked once I saw the designs she had in mind.

![very festive](/assets/img/2022-01-30-All-I-want-for-christmas/close.png)

The website when it's very close to christmas.
{{: .caption}}

![sad cursor and not much on the screen](/assets/img/2022-01-30-All-I-want-for-christmas/far.png)

The website when it's very far from christmas.
{{: .caption}}

![Small snowflakes with small album cover](/assets/img/2022-01-30-All-I-want-for-christmas/medium.png)

The website when we're in the middle of the year.
{{: .caption}}

As you can tell, Amanda might be a little bit of a better designer than me.

Check out our [design file on Figma!](https://www.figma.com/file/HDUQtDFR2cYls89XkLtW4M/All-I-want-for-christmas?node-id=0%3A1)

## The website

This was the first website I built using [Svelte](https://svelte.dev/)! I had done some basic tutorials on the framework a few months ago and had been waiting for an excuse to try it out on an actual project. I got up and running quickly and built a basic prototype that could play the song while adjusting the audio based on the date. Once I had the proof-of-concept working, all that was left was making the site match the design.

The biggest challenge on the entire website was getting the trail of 'eves' to work correctly. Whenever the user moves the mouse, we calculate the mouse position and offset the 'eve' elements properly based on their number. The resulting code looks something like this:

```html
<script>
  $: days = Math.min(150, daysUntilChristmas);
  let mouseDistance = { x: 0, y: 0 };
  const handleMousemove = (e) => {
    if (daysUntilChristmas > 0) {
      // The horizontal difference from cursor to the anchored 'eve'
      mouseDistance.x =
        e.clientX -
        seasonsGreetings.offsetLeft -
        seasonsGreetings.offsetWidth +
        eve.offsetWidth / 2;
      // The vertical difference from cursor to the anchored 'eve'
      mouseDistance.y =
        seasonsGreetings.offsetTop - e.clientY - eve.offsetHeight / 2;
    }
  };
</script>

<span style="position: relative; width: 0; height: 0">
  <!-- Create a span for the number of days until 12/25 -->
  {#each { length: days } as _, i}
  <!-- Use the  -->
  <span
    class="eve"
    style="bottom:{(mouseDistance.y / days) * i}px;
               left:{(mouseDistance.x / days) * i}px"
    bind:this="{eve}"
  >
    {#if i === days}
    <!-- Add exclamation marks to the last eve -->
    eve!!! {:else} eve {/if}
  </span>
  {/each}
</span>

<style>
  .eve:nth-child(odd) {
    color: var(--main-bg-color);
    -webkit-text-stroke: 1.5px #000;
  }
  .eve:nth-child(even) {
    -webkit-text-stroke: 1.5px var(--secondary-color);
  }
  .eve {
    color: #fff;
    font-weight: 700;
    position: absolute;
    user-select: none; /* Don't let these elements interfere with other user interactions */
  }
</style>
```

The second major challenge was more of a design problem. After all, the christmas spirit doesn't really linearly increase throughout the year. It gradually increases throughout the majority of the year, but it really starts to skyrocket after Thanksgiving. As an MVP, I first coded the website to linearly scale the volume between Thanksgiving and Christmas. Still, as [a helpful GitHub user pointed out](https://github.com/leviv/christmas/issues/1), my implementation had some wonky side effects. We needed something that would show some sort of change throughout the year. Eventually, I settled on an implementation that scaled the volume 0-15% from December 26 to Thanksgiving and 15-100% from the day after Thanksgiving to Christmas.

## Reception

When I showed the work-in-progress site to friends, family, and coworkers, nearly all of them had the exact reaction. "I don't know what this is, but it's pretty funny," which was what we were going for. Once we had fine-tuned most of the interactions and designs, we eventually launched on December 18. And by launched, I mean I posted it on [Reddit](https://www.reddit.com/r/web_design/comments/rj5wgt/i_built_a_website_that_plays_all_i_want_for/) and [Twitter](https://twitter.com/villarreallevi/status/1472171321513676800). The response was better than I had hoped! Many of my friends and complete strangers took time to visit, and my post even hit the top of r/web_design for the day! My favorite comment of the bunch was this one, but there are a lot of gems in the thread.

![Reddit comment](/assets/img/2022-01-30-All-I-want-for-christmas/chat.png)

"I did really enjoy the way you turned my mouse pointer into an elf. Gave me a warm feeling inside."
{{: .caption}}

There were also many great suggestions for other fun minor interactions or easter eggs to add, and I think adding those would be a great idea to revisit next holiday season. That is if I can handle listening to this song hundreds more times as I develop the website.
