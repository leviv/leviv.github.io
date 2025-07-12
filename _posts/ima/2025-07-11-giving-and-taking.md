---
layout: post
title: "Giving and Taking"
image: 
category: ima
miscellaneous: ima
---

Before I even started [grad school at NYU](https://itp.nyu.edu/lowres/), I had assignments due. One of them was 'Exploration 01 - Gifting'. This is for my [Exploratory Making](https://www.exploratorymaking.art/) course - a class born out of the IMA low-res program centered around creating to learn.

The assignment, like most in the program, was simple but open ended. We were to come to the first class of the year with a gift. Something we were interested in and felt uniquely connected to. It was to be a seed of passion that could root and grow in many directions. I brought a version of my pocket wifi portal - a device [I've blogged about in the past](https://leviv.cool/projects/2024/10/05/creating-a-pocket-wifi-portal.html) that creates for a localized, personalized wireless network of my choosing.

What I got in return was a picture of my classmate Rebekah Zhou's favorite painting, *The Coronation of Napoleon*.

![Napoléon](/assets/img/2025-07-11-giving-and-taking/Napoléon.JPG)

The Coronation of Napoleon by Jacques-Louis David
{: .caption}

The painting captures the moment that Napoleon crowned himself emperor - wresting the imperial crown from Pope Pious VII. He upended the traditional catholic monopoly over the empororship, and planned the whole ceremony against the grain of tradition. I used this great [interactive article by Google Arts and Culture](https://artsandculture.google.com/story/story-of-a-coronation-palace-of-versailles/NgWhI7emoChPKw?hl=en) to learn more about the piece and the people depicted in it.

Rebekah told me that it was for those reasons that the image had been her computer wallpaper for the last 8 years. It motivated her to acheive her goals, and do things her way, whether it be finshing school, starting her own pet brand, or choosing a city to setltle down in long term.

## The Response

At the end of the first day of class, after we finished sharing our gifts, we were given homework to respond to the gift we received by making *something* using a medium we were familiar with.

I immediately went to the idea of a website. I started by just putting the image on a webpage.

```html
<img src="napoleon.jpg" />
```

I stared at it for a while, thinking about how I could transform the imaae through the medium of the web. I started by just putting emojis in the the hands of Napoloeon because I thought it looked funny. However it wasn't as interactive as I wanted and I thought it could be good to push myself to do something a bit more technical. 

![image 20250710210036592](/assets/img/2025-07-11-giving-and-taking/image-20250710210036592.png)

My first idea, having Napoleon hold different emojis 
{: .caption}

I eventually settled on wanting to manipulate the image with mouse movement. To do this I loaded the image in an HTML `canvas` element and added a `mousemove` event handler.

```javascript
canvas.addEventListener("mousemove", pixelate);

function pixelate(event) {
  const ctx = canvasEl.getContext('2d');
  const canvas = ctx.canvas;

  const bounding = canvas.getBoundingClientRect();
  const x = event.clientX - bounding.left;
  const y = event.clientY - bounding.top;
  const pixel = ctx.getImageData(x, y, 1, 1);
  const data = pixel.data;
  const brushSize = 40;

  for (let i = brushSize * -.5; i < brushSize / 2; i++) {
    for (let j = brushSize * -.5; j < brushSize / 2; j++) {
      ctx.putImageData(pixel, x+i, y+j)
    }
  }

  const rgbColor = `rgb(${data[0]} ${data[1]} ${data[2]} / ${data[3] / 255})`;
  console.log(rgbColor)
}
```

This produces a 'pixelated' effect as the user moves around the mouse. The more you move around the mouse the more pixelated it gets, with slower movement producing less colors. If wanted, you can right click and save the image you create to your computer/phone.

<iframe width="100%" height="462" src="https://www.youtube.com/embed/HGabGFG03jE" title="Napoleon" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

An example of the the final interaction
{: .caption}

To play with the demo yourself, check it out [here](https://leviv.cool/napoleon).

I liked this interaction beacuse it allows you to repaint over the canvas. Similar to how Napoleon upended the traditional coronation ceremony, this website allows the user to upend the traditional looking European oil painting with your own custom digital flair. If I had more time I would have spent some time coming up with different stroke effects, maybe making it round instead of square, and use a better color sampling algorithm.

## Deep listening

This project was an exercise in participatory attention and listening and engaging with classmates. We also had to read an excerpt from the book 'Deep Listening: A Composer's Sound Practice' and do three of the exercises outlined in the book. The three I chose were:

1. Cross Overs (1996) - Repeat words and sounds ad nauseam
2. Extreme Slow Walk - Walk as slow as physically possible
3. Palms of Hands - Rubbing your palms together and moving them over your body

Each of these had me slowing down, listening to myself and my environemnt, and feeling my body. It felt weird to do these exercises; rubbing my hands together, walking extremely slowly, and repeating the same words and sounds over and over again. I'm a pretty skeptical person, so I don't think I buy the whole energy transfer of by your hands on your navel - but other than that, I enjoyed the excersises. They made me think about the inherent strangeness of sound, and feel every part of my legs and feet. 

Indeed in the reading the author states that anyone can practice Deep Listening, which is defined as active engagement and distinct from the passive activity of here. To hear is the physical means that enables perception. To listen is to give attention to what is perceived both acoustically and psychologically. In fact Deep Listening is a form of meditation, where attention is "directed to the interplay of sounds and silences." I definitely found this to be true while completing these rituals, and it was a good reminder to Deeply Listen more often.