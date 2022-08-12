---
layout: post
title: "Twitter NFT Generator???"
image: /assets/img/2022-07-26-Twitter-NFT-Generator/landing.png
category: projects
tag: projects
---

[Check out the live website!](https://leviv.me/nft-pfp/)

[Check out the video demo!](https://youtu.be/1t37qoKTYhU)

[Check out the Github repo!](https://github.com/leviv/nft-pfp)

![landing](/assets/img/2022-07-26-Twitter-NFT-Generator/landing.png)

Final website
{: .caption}

On January 20, 2022, Twitter announced [official NFT profile pictures](https://twitter.com/TwitterBlue/status/1484226494708662273). Twitter (premium) users could now connect their OpenSea account and display an NFT they 'owned,' and Twitter would render it with a fancy rounded hexagon border across all of their platforms so that everyone would know that they owned that NFT.

I generally dislike NFTs for many of [the normal reasons](https://www.theverge.com/2021/3/15/22328203/nft-cryptoart-ethereum-blockchain-climate-change). Fundamentally, I think artificially creating scarcity and elitism on the internet - a medium that has long served to combat these problems - is stupid. I hated to see a platform like Twitter normalizing and legitimizing NFTs, and I would hate to see more platforms moving in that direction.

However, I was intrigued to see how Twitter implemented this feature and saw that they weren't doing much more than applying an SVG path using the `clip-path` property.

```html
<!-- The raw SVG data from the `#hex-hw-shapeclip-clipconfig` element in the Twitter source code. -->
<path
  d="M193.248 69.51C185.95 54.1634 177.44 39.4234 167.798 25.43L164.688 20.96C160.859 15.4049 155.841 10.7724 149.998 7.3994C144.155 4.02636 137.633 1.99743 130.908 1.46004L125.448 1.02004C108.508 -0.340012 91.4873 -0.340012 74.5479 1.02004L69.0879 1.46004C62.3625 1.99743 55.8413 4.02636 49.9981 7.3994C44.155 10.7724 39.1367 15.4049 35.3079 20.96L32.1979 25.47C22.5561 39.4634 14.0458 54.2034 6.74789 69.55L4.39789 74.49C1.50233 80.5829 0 87.2441 0 93.99C0 100.736 1.50233 107.397 4.39789 113.49L6.74789 118.43C14.0458 133.777 22.5561 148.517 32.1979 162.51L35.3079 167.02C39.1367 172.575 44.155 177.208 49.9981 180.581C55.8413 183.954 62.3625 185.983 69.0879 186.52L74.5479 186.96C91.4873 188.32 108.508 188.32 125.448 186.96L130.908 186.52C137.638 185.976 144.163 183.938 150.006 180.554C155.85 177.17 160.865 172.526 164.688 166.96L167.798 162.45C177.44 148.457 185.95 133.717 193.248 118.37L195.598 113.43C198.493 107.337 199.996 100.676 199.996 93.93C199.996 87.1841 198.493 80.5229 195.598 74.43L193.248 69.51Z"
></path>
```

Seeing this, I thought it would be funny to create a profile picture that used the same shape to trick people into thinking I had one of these new NFT profile photos. Taking it a step further, I thought, why not create a website to allow anyone to generate an NFT profile photo? After all, if Twitter users couldn't tell which NFT profile photos were "legitimate" or not, it would undermine the authenticity of the entire feature.

## Part 1: Cropping the photo

This project occurred in two parts: Starting on January 21, I tried to get the website's primary functionality - cropping a photo to the SVG path - done as fast as possible. Then, I tried to create a modern, web3-Esque website that would be fun to explore.

The first part was primarily done in CodePen and involved lots of experimentation. I accomplished the photo cropping by using a 2D HTML canvas to draw the image, clipped by the given SVG path. The hardest part was ensuring that this cropping worked for long horizontal and vertical pictures so that the result was centered. Ideally, the user could control which part of the image to crop, but I was trying to finish this project as fast as possible.

Below is the relevant code for cropping the image. Most of the magic happens with `ctx.clip(scaledPath)`, which is analogous to CSS' `clip-path` property.

```javascript
// Scale the canvas to be the correct size and centered around the image
let scaleFactor, translateX, translateY;

if (img.height / HEX_SVG_HEIGHT > img.width / HEX_SVG_WIDTH) {
  // Image is portrait
  scaleFactor = img.width / HEX_SVG_WIDTH;
  translateX = 0;
  translateY = (img.height - HEX_SVG_HEIGHT * scaleFactor) / 2;
} else {
  // Image is landscape
  scaleFactor = img.height / HEX_SVG_HEIGHT;
  translateX = (img.width - HEX_SVG_WIDTH * scaleFactor) / 2;
  translateY = 0;
}

// Create a transformation matrix so we can scale the image
let transformationMatrix = document
  .createElementNS("http://www.w3.org/2000/svg", "svg")
  .createSVGMatrix();
transformationMatrix = transformationMatrix.scale(scaleFactor);

canvas2d.width = HEX_SVG_WIDTH * scaleFactor;
canvas2d.height = HEX_SVG_HEIGHT * scaleFactor;

// Clip the image to the svg path
const scaledPath = new Path2D();
scaledPath.addPath(hexPath, transformationMatrix);
ctx.clip(scaledPath);

// Draw the user provided image over the hexagon svg, translating it so it's center
ctx.drawImage(
  img, // image object
  translateX, // source X
  translateY, // source Y
  HEX_SVG_WIDTH * scaleFactor, // source width
  HEX_SVG_HEIGHT * scaleFactor, // source height
  0, // dest x
  0, // dest y
  HEX_SVG_WIDTH * scaleFactor, // dest width
  HEX_SVG_HEIGHT * scaleFactor // dest height
);
```

There are a few things that I did not include in this code snippet. Namely, I added some extra padding to the height so the circular cropping of twitters profile photos would not cut off the corners of the hexagon. Also, for `.png` profile photos to have transparent backgrounds on Twitter, the images must be exactly 400px by 400px, a fact I was unaware of until the end of the project.

Overall, this part of the project was not very complex but took me significantly longer than it should have. It was my first time dealing with any image manipulation in JavaScript, and I learned a lot about the HTML Canvas element.

## Part 2: Making a ~Web 3~ landing page

I had a completed profile picture generator, but I wanted an interface to match. In my opinion, one of the best things to come out of the NFT/Web3 hype is the innovative web designs that have surfaced in the past months/years. I wanted to take some of the principles I had noticed from other web3 projects and apply them here. I surfed Dribbble to find examples like [this](https://dribbble.com/shots/17256896-AngelBlock-Intro) and [this](https://dribbble.com/shots/17304498-Landing-page-design) to supplement things I had already seen. Some relevant design aspects that stood out to me were:

- 3d elements
- Dark color pallettes
- Heavy use of gradients
- Transparent overlays

I had been taking Bruno Simons's ThreeJS Journey course and decided to make the whole landing page 3D to practice the things I'd been learning. I also heavily drew upon inspiration from [ilithya's website](https://ilithya.rocks).

I ended up with a very simple interface that included some 3d text and a giant spinning preview of the hexagon profile photo. The only abnormal part of this 3d scene was the construction of the 3d hexagon from the 2d svg. The relevant code is below (shoutout to [this blog post](https://muffinman.io/blog/three-js-extrude-svg-path/) from Stanko Tadić):

```javascript
const svgMarkup = document.querySelector("svg").outerHTML;
const loader = new SVGLoader();
const svgData = loader.parse(svgMarkup);

// Group that will contain all of our paths
const svgGroup = new THREE.Group();
var materials = [
  new THREE.MeshNormalMaterial({
    normalMap: trashTexture,
  }),
  new THREE.MeshNormalMaterial({}),
];

// Loop through all of the parsed paths
svgData.paths.forEach((path) => {
  const shapes = path.toShapes(true);

  // Each path has array of shapes
  shapes.forEach((shape) => {
    // Finally we can take each shape and extrude it
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.1,
      bevelEnabled: true,
      bevelSegments: 15,
    });
    geometry.center();
    geometry.scale(3, 3, 3);

    // Create a mesh and add it to the group
    const mesh = new THREE.Mesh(geometry, materials);

    svgGroup.add(mesh);
  });
});
```

Fun fact: the image in the hexagon is a reference to a viral tweet about an NFT enthusiast losing his Bored Ape Yacht Club NFTs.

![apes gone](/assets/img/2022-07-26-Twitter-NFT-Generator/apes-gone.png)

"I been hacked. all my apes gone. this just sold please help me"
{: .caption}

## Results

So how does this look when you use it on your profile?? Here are some comparisons with an actual NFT profile picture:

![nft comaprison light](/assets/img/2022-07-26-Twitter-NFT-Generator/nft-comaprison-light.png)

Real NFT profile photo (left), and fake profile photo (right)
{: .caption}

![nft comaprison dark](/assets/img/2022-07-26-Twitter-NFT-Generator/nft-comaprison-dark.png)

Dark mode
{: .caption}

You can tell the difference in a side-by-side comparison (and I later found that Twitter uses CSS to stretch the SVG hexagon to be a little taller). Still, to the average cursory glance, it looks pretty dang indistinguishable if you were to view it in a timeline format.

I posted this project to Twitter 2 days after Twitter launched NFT profile photos.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I thought the new Twitter NFT profile pictures were dumb, so I made a website for anyone to generate their own for free and keep the NFT community humble <a href="https://t.co/faILmkOD5s">https://t.co/faILmkOD5s</a></p>&mdash; Levi Villarreal (@villarreallevi) <a href="https://twitter.com/villarreallevi/status/1484969759498199045?ref_src=twsrc%5Etfw">January 22, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Not too much engagement, but I was happy with how the project turned out on such a short timeline. But more than anything, I was glad to feel like I was doing a small part to help delegitimize NFTs and showcase just how absurd they can be at times.
