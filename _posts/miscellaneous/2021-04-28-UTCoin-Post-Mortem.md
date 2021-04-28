---
layout: post
title: "UTCoin Post-Mortem"
category: miscellaneous
tag: miscellaneous
---

A few years ago, I proposed the idea of a burnt orange crypto-currency. And while it never became real, the hype surrounding it was.

## Setting the scene

This story happened at the beginning of 2018. Bitcoin had recently rocketed to an all-time high and seemed to catch the public's attention for the first time. Along with millions of others, I felt an incredible amount of FOMO and regret that I had not listened to my high school friend who had first told me about the obscure cryptocurrency ~3 years ago. At the same time as the Bitcoin surge, alt-coins became prominent as well. Two, in particular, caught my attention, Garlicoin, and DogeCoin. Both of them had a dedicated fan base, and their popularity was nearly entirely driven by the memes created and shared by the community.

![The price of Bitcoin in January 2018 (over 16k)](/assets/img/2021-04-28-UTCoin-Post-Mortem/graph.png)

The price of Bitcoin at the time, which was at an all-time high (but has since skyrocketed even more).
{: .caption}

Seeing these and more ridiculous alt-coins created every day, I started to think, "how hard could it be?". Having just completed my introductory Java course, and with a few years of web development under my belt, I was supremely overconfident in my ability to take on any programming-related projects. And as I soon found out, the answer turned out that creating a cryptocurrency from scratch was pretty hard for someone as naïve as me.

## The post

I remember watching the development of Garlicoin take place on Reddit, and after requesting to join the dev team (and being subsequently rejected), I started thinking about what a cool theme would be for my cryptocurrency. I wanted something that wasn't too broad but had just enough appeal to generate a buzz. After all, the value of cryptocurrency is based on its perceived worth, and I needed to start with a group of people who could easily see its value from the get-go. I thought about the different online communities I was a part of, and one of them stood out. The Facebook group "UT LONGMemes for HORNSYTeens" (a play on a Berkeley Facebook group with a similar name) had tens of thousands of users and a highly active stream of memes coming in, many of them concerning Bitcoin at the time.

I decided to post there because, in addition to potentially reaching numerous people, I hoped that posting on a public forum would put sufficient pressure on me to finish the project. I have found that with personal projects, it can often be difficult for me to finish promptly without some sort of deadline.

With that sorted, it took roughly 15 minutes to create a UTCoin graphic and author the post to send out to the meme group.

![Facebook post: If this gets 1000 reaccs I will create a cryptocurrency called UTCOIN and give everyone who comments 1 UTCOIN](/assets/img/2021-04-28-UTCoin-Post-Mortem/post.png)

The post made in the Facebook group, which amassed 4.7k reactions and over 3.5k comments.
{: .caption}

Within a few hours, the post started to blow up. It seemed to be the perfect combination of timeliness and vote manipulation. Timeliness because this was near the start of the surge of Bitcoin hype. Vote manipulation because the post essentially begged for comments, which meant that Facebook's algorithm would flag the post as especially interesting because comments signal more engagement than views or reactions. The idea that students could get something for free that had a sliver of blowing up similar bitcoin meant that many people commented with the mentality of "why not".

## Reactions

Many of the comments believed the post was fake and just made for some quick social media clout (which I'll admit was part of it), but many were surprisingly supportive, urging me to make this a reality. In this era when cryptocurrency and blockchain were first entering the public consciousness, anything seemed possible. Also, many people started creating new memes to ride the newly formed UTcoin hype train.

![Meme showing that UTCoin is how people really get rich](/assets/img/2021-04-28-UTCoin-Post-Mortem/meme1.png)

One of the many UTCoin memes that was made
{: .caption}

As soon as it became apparent that the post would reach one thousand reactions, I started to get multiple messages pouring in, asking to join the development team. I was taken aback by the amount of interest, but I quickly created a Slack and started adding people. I also got a few messages from people who took UTCoin even more seriously than I did and offered me investments to grow the concept and turn it into reality. I didn't realize it at the time, but the hype I had generated was something that many have attempted to artificially create in the past, often spending millions of dollars in the process. However, the idea of getting investors involved and putting money on the line terrified me, as the reality started to seep in that I had to develop this thing eventually. Looking back, I wonder how my life would have been different had I taken these offers seriously, as cryptocurrency has only gotten bigger since 2018.

## Development (If you can call it that)

At this point, the stars were seemingly aligning. I had eager customers, interested investors, and even a team of volunteers who wanted to help out. The only problem was that I had no how to create a cryptocurrency. I started by asking in the newly created UTCoin development Slack if anyone had the slightest idea of how to begin. A few people had some vague knowledge about blockchain, but most were as clueless as me when it came to crypto. However, we kicked off building a Facebook bot to automatically message everyone who had commented on the post and start understanding the basics of what we would need to create the coin.

After that, of course, I turned to Google. I found that it was pretty easy to create new alt-coins without any code, but they required ETH gas to send and were not a standalone cryptocurrency. I wanted a cryptocurrency that I could mine on my machine and send to anyone I wanted fee-free. I found a few blog posts and YouTube videos that seemed promising and tried following along. Most tutorials involved cloning the Bitcoin GitHub repo and search/replacing certain lines of the codebase to make a distinct coin. However, I always came across various blockers when following these tutorials. My poor Microsoft Surface often wasn't able to do the computations necessary, the tutorials had missing or incomplete steps, and my C++ knowledge was pretty close to 0. Pretty soon, my motivation was running low, and public interest had started to taper off.

However, new motivation soon came in the form of Microsoft Student Partners (MSP). At the beginning of my freshman year, I joined the MSP program because it sounded like an amazing opportunity to get my foot in the door of the software engineering world and have access to exclusive Microsoft events and opportunities. However, the reality was that we were glorified (and non-paid) Microsoft evangelists whose sole purpose was to put on monthly Azure workshops. As you can probably tell, I was very much not a fan of the gig and often struggled to find an interesting topic with my fellow UT MSPs that would allow us to have the recommended 60 attendees. The end of January was coming up, and we didn't have a topic planned. While brainstorming, I had the idea to combine the time I spent on UTCoin with my upcoming workshop. Azure had some blockchain and cryptocurrency-related tooling, and I decided to put together a workshop that explained the core concepts of blockchain and walked participants through how to create their crypto wallets and make a personal alt-coin. Like the other options I had previously explored, this type of alt-coin was not standalone and required gas (money) to send to other people. However, I figured I could use it for purely demo purposes while I created the real UTCoin.

We soon started marketing the event through Facebook and physical flyers, while really leaning into the UTCoin branding. These promotions once again put pressure on me to launch UTCoin at this event and to hurry and get it finished.

![Screenshot of facebook event page](/assets/img/2021-04-28-UTCoin-Post-Mortem/event.png)

Facebook announcement of the event
{: .caption}

I spent the next two weeks trying as hard as I could to turn UTCoin into a reality but still faced many of the same roadblocks, the primary one being my lack of familiarity with the complicated subject. Finally, it was the night before the workshop and I had once again cleared my UTCoin repository and started over in frustration. I stayed in the library until nearly 3 am that night, trying and failing one last time to create the cryptocurrency. I reluctantly admitted that I was in over my head and would not get it done by the next day. With that, I finally went to sleep, dejected and discouraged.

On the day of the workshop, we packed the room with over 100 people. While we usually struggled to fill the venue during a normal workshop, this one was standing room only. I gave the workshop I had prepared to the attendees, and they were able to successfully create wallets, which I collected into a Google form, promising that they would be the first ones to receive UTCoin until our Facebook bot was up and running. Finally, the night was over, and I was relieved to be free of the stress of the event and mentally blocked any thought of UTCoin from entering my mind.

## The aftermath

Soon after that event, interest in cryptocurrency fell, and the bitcoin bubble had seemingly burst. I was burned out mentally and emotionally from spending so much time with nothing to show for it, and the other UTCoin volunteers had dropped off too, losing interest after weeks of no real progress. Also, classes had begun in earnest, and I simply did not have the time or energy to go forward with the project. And with that, I quietly moved on from UTCoin and tried to forget what I saw as a colossal failure, a promise that I was not able to follow through.
Not everyone forgot (or forgave) as easily though, I still get teased by friends about UTCoin, and over the past years have met a handful of people who say, "Oh, you're the UTCoin guy! Whatever happened to that?" However, the internet moves at a rapid pace, and the memes soon turned away from cryptocurrency and onto the next topic, leaving UTCoin behind as little more than a footnote in my college career.

## Conclusion

The primary reason behind writing this post was to get out my feelings and talk about something I have avoided thinking about for years now, as it's no fun recalling my failings. However, time heals all wounds, and I can now look back on the situation with good humor and laugh about how naïve I was. Despite this experience, I still believe that an unsubstantiated amount of confidence can often lead to great things and has served me well in many situations (outside of this one).
UTCoin was my first personal experience with the hype that can surround new technology, and it was a pretty wild one. My idea went viral online, spawned many parodies and memes, and even got me a featured article in the UT student newspaper. However, when I reflect on this, I'm often reminded of the quote, "Success equals luck plus preparedness", and while I had luck on my side, I was seriously lacking when it came to being prepared. What would have happened if I had the knowledge to turn UTCoin into a reality? Would it have been propelled to the success that DogeCoin is today, or would it have been a drawn-out and spectacular failure?

And the most important question of all, who's to say UTCoin isn't still coming when it is least expected?

![Facebook message that says, "Wheres my fucking UTCoin"](/assets/img/2021-04-28-UTCoin-Post-Mortem/request.PNG)
