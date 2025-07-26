---
layout: post
title: "Self portraits"
image: 
category: miscellaneous
miscellaneous: miscellaneous
---


Before class started for Creative Coding - my most anticipated class of the semester, we already had substantial homework.

> Draw a simple “self-portrait” with a pen on paper. Then, try your best to recreate it in code using p5.js! 

Now I've written a lot of code in my day. I spent 4 years in undergrad getting a computer science degree. And I've since spent another 4 years working (+/-2) 8 hours every weekday as a professional software engineer.

But this? This was a completely new kind of coding to me. 

I started of course, with a pen and paper sketch. I purposely tried my best *not* to think about how this sketch would translate to code, as I wanted to push myself beyond only simple shapes and lines.

![self portait](/assets/img/2025-07-25-self-portraits/self-portait.PNG)

My reference image. My drawing skills and my hair leave much to be desired
{: .caption}

![self sketch](/assets/img/2025-07-25-self-portraits/self-sketch.png)

I used what I had in the moment: a pen and a mini postcard. Does it look like me? 2/3 friends say it doesn't
{: .caption}

Once I had the sketch, I created a **p5.js sketch**: a JavaScript library that makes tasks like drawing lines, shapes, and animations dead simple. I started with easy things like my face shape (`line()`), my eyes (`ellipse`) and my eyebrows (`arc()`). All these functions were as intuitive to use as a graphing calculator, and helped me warm up to the library. Eventually I got to my hair - finally using the more intimidating `bezier()` function to mess around with wavy lines until I got something passable. An hour later I was done - feeling neither dissapointed nor accomplished, just fine. But the first day of grad school was tomorrow and I didn't have time to spend another few hours polishing so I called it good enough.

<iframe src="https://editor.p5js.org/leviv/full/ORJOaW2B-"></iframe> 

The completed sketch for homework 0
{: .caption}

That changed though when I saw my classmates work. Despite nearly all of them having little to no technical backgrounds, so many of them had managed to create beautiful graphics, despite writing some of the worst code I had ever laid eyes on. I had really underestimated the first half of the name 'Creative Coding'.

## Assignment 1

Thinking I was done with my mediocre sketch forever, I was miffed to learn that the first assignment would be expanding on that self-portrait 

> Make the drawing proportional to the size of the window and Include one element that **interacts with the mouse**. **Mandatory for experienced coders:** Make the self portrait sketch interact with the viewer’s **body movement**—hand gestures, eye blinks, distance to the screen, etc..

I was determined to make this sketch more impressive than the last. I made my avatars face interactive (got your nose!) and added some color. The real kicker though was the bonus requirement - making the self portrait responsive to the viewer's body movement. This was my first time using the `ml5.js` library - and it made computer vision simple. It was (almost) as easy as:

```javascript
poseNet.on("pose", function (results) {
  poses = results;
});
// ...
const noseX = width - poses[0].pose.keypoints[0].position.x;
const noseY = poses[0].pose.keypoints[0].position.y;
```

To get the viewers head movements - and then I simply adjusted the sketches eyes to match the head movement. This gave the sketch the ability to watch the user both a bit cool and creepy.

<iframe src="https://editor.p5js.org/leviv/full/oOQWAv94F"></iframe>

Homework 1 sketch. Try dragging the nose and click the editor to enable camera to see the eyes moving!
{: .caption}

Demoing this sketch to the class next week, I got the 'oohs' and 'aahs' that I hoped for. It was satisfying to work with unconventional methods of input, and really defanged a lot of the trepidation I had with both `p5.js`, and using a users body as input. Although it does also mean that some of the magic is lost for me when I try out other peoples interactive installations.