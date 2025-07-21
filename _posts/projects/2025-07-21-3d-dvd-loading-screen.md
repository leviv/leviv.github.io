---
layout: post
title: "3D DVD Loading Screen"
image: /assets/img/2025-07-21-3d-dvd-loading-screen/dvd.gif
category: projects
tag: personal
---


[Link to demo](https://leviv.cool/3d-dvd)

[Link to code](https://github.com/leviv/3d-dvd)

![dvd](/assets/img/2025-07-21-3d-dvd-loading-screen/dvd.gif)

Gif of the finished site. It looks better on your own computer - check it out above!!
{: .caption}


Do you guys remember the bouncing dvd logo when we used to primarily watch movies on physical compact disks? Like many kids, I spent hours in the living room and in the classroom watching the multicolored DVD logo bounce around the screen.

It was a paradigm born of necessity, back when displaying a static image for too long on a CRT (cathode ray tube) monitor could easily cause burn-in.

In CRT monitors, images are displayed by shooting streams of electrons at a phosporous screen, which causes that part of the screen to glow. Bombard the same spot with too many electrons for too long, and you'll see that part of the screen glow even while it's no longer actively been lit up. 

So when I saw an instagram reel experiment 2 years ago with a rendered bouncing 3d logo - I knew it was a great project to try out with my newfound [ThreeJS knowledge](https://threejs-journey.com/). I have searched high and low to find the original Instagram video I was inspired by - to no avail! Shoot me an email if you find it!

## The Project

All-in-all, this is a pretty standard ThreeJS project. We have two boxes with some hit detection.

```javascript
const outerBoxGeometry = new THREE.BoxGeometry(30, 20, 30);
let outerBoxColor = 0x00ffff; // Default color for the outer box
let outerBoxMaterials = ...;
const outerBox = new THREE.Mesh(outerBoxGeometry, outerBoxMaterials);
scene.add(outerBox);

const innerBox = new THREE.Mesh(innerBoxGeometry, innerBoxMaterials);
innerBox.position.set(
  - (outerBoxGeometry.parameters.width / 2 - innerBoxGeometry.parameters.width / 2),   // X: left
    (outerBoxGeometry.parameters.height / 2 - innerBoxGeometry.parameters.height / 2), // Y: top
  - (outerBoxGeometry.parameters.depth / 2 - innerBoxGeometry.parameters.depth / 2)    // Z: front
);
scene.add(innerBox);

const velocityVector = new THREE.Vector3(.05, .05, .05);

const tick = () => {
  // X walls (right/left)
  const xLimit =
    Math.abs(
      outerBox.position.x +
        outerBoxGeometry.parameters.width / 2 -
        innerBoxGeometry.parameters.width / 2
    );
  if (Math.abs(innerBox.position.x) >= xLimit) {
    velocityVector.x = -velocityVector.x;
  }
  
  // Y walls (top/bottom)
  const yLimit =
    Math.abs(
      outerBox.position.y +
        outerBoxGeometry.parameters.height / 2 -
        innerBoxGeometry.parameters.height / 2
    );
  if (Math.abs(innerBox.position.y) >= yLimit) {
    velocityVector.y = -velocityVector.y;
  }
  
  // Z walls (front/back)
  const zLimit =
    Math.abs(
      outerBox.position.z +
        outerBoxGeometry.parameters.depth / 2 -
        innerBoxGeometry.parameters.depth / 2
    );
  if (Math.abs(innerBox.position.z) >= zLimit) {
    velocityVector.z = -velocityVector.z;
  }
  
  innerBox.position.add(velocityVector);
  innerBoxEdges.position.add(velocityVector);
}

tick()
```

We have two boxes.  We move each axis on the inner boxy by `05` each `tick`. When the inner box crosses the outer boxes bounder, we reverse the velocity for that axis. And for two years that's how the code stayed. Just a box bouncing around - not very exciting!

So I added a bunch of 'juice' to make things more interesting. I added

- An intro animation
- The actual DVD logo as a texture on the inner box
- Color on the outer box faces when hit
- Sound effects on hit
- A counter for corner hits
- Debug controls for controlling axis velocity

This really elevated the project from boring to at least mildly interesting! 

## So does this thing ever hit the corner?

No. Maybe? Honestly probably not unless you fiddle with the velocity sliders and get lucky. When fiddling with the initial velocity I was either getting patterns that hit the corners way too often, or patterns that seemingly missed the corners forever. But maybe it's just because I'm not patient enough. I'm not sure the exact math behind getting, say, one corner hit ever 100 bounces, but if I do figure that out, I'll update the code!

## Reception

I mostly got reception via [my company's](http://figma.com/) Slack channel.

![slack](/assets/img/2025-07-21-3d-dvd-loading-screen/slack.png)

Wow - 21 reacts! Although one of them is mine
{: .caption}

People shared their high score, a number of bugs ([disposing](https://threejs.org/docs/#api/en/materials/Material.dispose) of out of date materials and textures!!), and successfully killing at least a few hours of what could have been productive work. Overall this was a fun little project that was small in scope to begin with, and finished as a respectable bite size website.
