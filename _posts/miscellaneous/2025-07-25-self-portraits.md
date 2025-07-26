---
layout: post
title: "Self portraits"
image: 
category: miscellaneous
miscellaneous: miscellaneous
---


Before class started for Creative Coding - my most anticipated class of the semester - we already had homework.

> Draw a simple “self-portrait” with a pen on paper. Then, try your best to recreate it in code using p5.js! 

Now I've written a lot of code in my life. I spent 4 years in undergrad studying for a computer science degree. And I've since spent another 4 years working (+/-2) 8 hours every weekday as a professional software engineer.

But this? This was a completely new type of coding. 

I started with the pen and paper sketch. I purposely tried my best *not* to think about how this sketch would translate to code, as I wanted to force myself to code forms beyond simple lines and shapes.

![self portait](/assets/img/2025-07-25-self-portraits/self-portait.PNG)

My reference image. Both my drawing skills and my hair leave a bit to be desired
{: .caption}

![self sketch](/assets/img/2025-07-25-self-portraits/self-sketch.png)

I used what I had in the moment: a pen and a mini postcard. Does it look like me? 2/3 friends say no
{: .caption}

Once I had the sketch, I created a **p5.js sketch**: a JavaScript library that makes drawing lines, shapes, and animations dead simple. I started with easy things like my face shape (`line()`), my eyes (`ellipse()`) and my eyebrows (`arc()`). All these functions were as intuitive to use as a graphing calculator, and helped me warm up to the library. Eventually I got to my hair - finally using the more intimidating `bezier()` function to mess around with wavy lines until I got something passable. An hour later I was done - feeling neither dissapointed nor accomplished, just fine. But the first day of grad school was the next day at 9am! I didn't have time to spend another few hours polishing so I left it at 'good enough'.

<iframe src="https://editor.p5js.org/leviv/full/ORJOaW2B-" width="100%" height="420" frameBorder="0"></iframe> 

The completed 'sketch' for homework 0. I promise my widows peak is not that bad in real life.
{: .caption}

That changed when I saw my classmates work. Despite nearly all of them having little to no technical background, the class was filled with presentations of beautiful graphics. And in that moment I realized even if their code was ugly, the impact of the final product was what mattered. I had definitely underestimated the first half of the name 'Creative Coding'.

## Assignment 1

Thinking I was done with my mediocre sketch forever, I was miffed to learn that the first assignment would force us to expand on that self-portrait.

> Make the drawing proportional to the size of the window and Include one element that interacts with the mouse. **Mandatory for experienced coders:** Make the self portrait sketch interact with the viewer’s **body movement**—hand gestures, eye blinks, distance to the screen, etc.

I was determined to make this sketch more impressive than the last. I made my avatars face interactive (got your nose!) and added some color. However, the real pièce de résistance was the bonus requirement - making the self portrait responsive to the viewer's body movement. This was my first time using the `ml5.js` library - and it made computer vision simple. It was (nearly) as easy as:

```javascript
poseNet.on("pose", function (results) {
  poses = results;
});
// ...
const noseX = width - poses[0].pose.keypoints[0].position.x;
const noseY = poses[0].pose.keypoints[0].position.y;
```

To get the viewers head movements - and then I simply adjusted the sketches eyes to match those coordinates. This gave the sketch the illusion of watching the user - equal parts cool and creepy.

<iframe src="https://editor.p5js.org/leviv/full/oOQWAv94F" width="100%" height="420" frameBorder="0"></iframe>

Homework 1. Try dragging the nose and open the editor in a new tab to see the eyes moving!
{: .caption}

Demoing this sketch to the class next week, I got the 'oohs' and 'aahs' that I hoped for. It was satisfying to work with unconventional methods of input, and really defanged a lot of the trepidation I had with both `p5.js`, and using a users body as input. These assignments showd me that none of my coding competency mattered if I did not put the effort in to develop my style, and have my work leave an impact on the end user. 