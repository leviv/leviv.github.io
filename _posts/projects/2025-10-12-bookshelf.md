---
layout: post
title: "Bookshelf"
image: /assets/img/2025-10-12-bookshelf/bookshelf.png
category: projects
tag: grad-school
---


[Try the demo!](https://leviv.cool/bookshelf/)

[Look at the source code](https://github.com/leviv/bookshelf)

![A section of the bookshelf](/assets/img/2025-10-12-bookshelf/bookshelf.png)

A close up section of the bookshelf
{: .caption}

## Introduction

Early last year I came across this Tweet from Adam Majmudar

  <blockquote class="twitter-tweet tw-align-center"><p lang="en" dir="ltr">spent way too long making my book review page<br><br>ended up building a 3d interactive bookshelf <a href="https://t.co/nwotnY5pJN">pic.twitter.com/nwotnY5pJN</a></p>&mdash; adammaj (@MajmudarAdam) <a href="https://twitter.com/MajmudarAdam/status/1760485637680198099?ref_src=twsrc%5Etfw">February 22, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I had spent way too much time in 2021 exploring and trying to recreate the [Stripe Press](https://press.stripe.com/) website. In my deep dive of Stripes compiled code, I found that each book was a combination of a 3D model, texture and diffusion maps, and overlays. The books were then loaded into the browser with ThreeJS, with shaders using all the resources to create the matte and shimmering effects. This was a bit complicated for me, especially at that time when I had never heard of or created a shader before. 

I abandoned the project until seeing Adam's tweet, which reignited my desire to create a personal digital bookshelf. Adam linked his code in the replies, and I used that to get started. It used a much simpler CSS transform and SVG filter to create the 3D effect, which didn't require creating custom texture maps like the Stripe Website. I converted his Next Code to Svelte, and got a rough prototype working that used the same transforms.

![book animation demo](/assets/img/2025-10-12-bookshelf/demo.gif)

A working svelte demo, using the animation from Adams bookshelf
{: .caption}

After this, I promptly abandoned the project for a year and a half, getting busy with my day job at Figma. I picked it back up again when my first project for Connections Lab in grad school was to make 'something' interactive that used a dataset. I had long had the idea to connect the bookshelf to my Goodreads profile - on which I had been faithfully reviewing books for the past two years.

## Development

The two technical complexities of this project were:

1. Connecting the bookshelf to Goodreads data
2. Fetching book covers and spine color

### Connecting the bookshelf to Goodreads data

Finding my Goodreads data is easy. There's a [settings page](https://www.goodreads.com/review/import) that makes your data available in `.csv` format at the push of a button. Looking at the downloads you can see a number of interesting fields. Here's some of the relevant ones - there's a sample file on the import/export page to see all.

```txt
{
  Book Id,
  Title,
  Author,
  ISBN,
  My Rating,
  Average Rating,
  Number of Pages,
  Date Read,
  Date Added,
  My Review
}
```

I used the number of pages to set the width of the book in the bookshelf which works pretty well for all the books in my 'read' shelf except for The Power Broker (1,246 pages). It was a helpful list of book data with which I could fetch the publication date, average rating, author etc, and personal data to display my review of the book.

![A long virtual bookshelf](/assets/img/2025-10-12-bookshelf/entire-bookshelf.png)

All of the books I've reviewed in the past year
{: .caption}

To parse the data, I used [PapaParse](https://www.papaparse.com/) and provided it with a schema that matched the Goodreads data. This made parsing super simple and allowed me to spend more of my time thinking about how I would use the data.

### Fetching book covers and spine color

Unfortunately, the one thing that the Goodreads dataset did not supply was the book cover image. But Internet Archive has [a dead simple api](https://openlibrary.org/dev/docs/api/covers) (part of Open Library) that allows you to fetch book covers with just an ISBN - which is one of the fields we have from Goodreads. 

With this API, I was able to fetch most, but not all, book covers. Some books were missing covers in the Open Library dataset, and some had missing ISBN numbers in Goodreads. Furthermore, the books looked pretty lame when their spine colors didn't match the cover, in a way that would be a given in the real world.

To get colors from the cover image, I used the library [ColorThief](https://lokeshdhakar.com/projects/color-thief/), which grabs the color palette from an image with a simple `colorThief.getColor(img)` call. For non-covered books, I still wanted a theme, so I generate a pastel color, and use the books title and author name to create a plain but passable DIY cover.

![Book with diy cover](/assets/img/2025-10-12-bookshelf/book-no-cover.png)

## What's next
{: .caption}

I'm leaving this project for now in a state that I'm just ok with. Everything works (as far as I know), but nothing is super polished. The review section is all but unstirred, and it's not yet something I would want on the home page of my personal website.

![Review Section](/assets/img/2025-10-12-bookshelf/review.png)

The review page - very plain for now
{: .caption}

I would love to eventually turn this project into a customizable embed that anyone could have on their website. I added a button for other people to upload their own Goodreads data, but it would be create to give them the opportunity to host it too. Because of API limiting, I would probably necessarily need to have users download the cover images and source code rather than serving the bookshelf from my website, but I think it would still be a worthwhile endeavor!

However, the semester drags on and I'm on to other projects! Please leave a comment or email me with any feedback, and feature requests (or praise?).