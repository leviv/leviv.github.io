---
layout: post
title: ButtonHero - A Collaborative Instrument
image: /assets/img/2020-03-20-ButtonHero/physical.jpg
category: projects
tag: college
---

This was a final project for the DM2623 IT Design for Disabilities course at KTH Royal Institute of Technology during the spring 2020 semester while I was studying abroad.

[GitHub Link](https://github.com/leviv/buttonhero)

**Authors**:

Levi Villarreal - villarreallevi@utexas.edu

Gracia Yuwono Kwantalalu - graciayk@kth.se

Josephine Lantz

Teun Loeffen

## Abstract

Children with profound intellectual disabilities often find it challenging to interact with other children, and have minimal opportunities to improve these skills. Due to the importance of collaboration as a lifelong skill, we want to help these children improve this skill as much as possible. We aim to achieve this by building an accessible musical instrument, which can be played together by many children. The musical instrument consists of buttons that light up and when pressed, play a part of a song. This instrument can be both physical and digital, allowing for different kinds of play.

## Introduction and background

While visiting Rullen (a school for disabled children in Stockholm), the president of the school told us that one of the biggest issues in the school was that most of the time, including during music classes, the students were not able to meaningfully interact with each other. We think that an easy and fun way to enable collaboration is through playing music together.

### Background

According to Article 27 of the Declaration of the Human Rights (1948), “Everyone has the right to freely participate in the cultural life of the community...” This declaration suggests that everyone, regardless of abilities or disabilities, should be able to play music within their community if they want to.

With the declaration in mind, great progress has been made in the area of accessible musical instruments. This is because researchers have found multiple benefits that musical therapy can offer to people with intellectual disabilities. These benefits include, but are not limited to, improving communication, cognition, physical development and emotional development (Hooper et al., 2008).

Over the past few years, there has been a steady increase in the availability of assistive music technology (AMT) and accessible Digital Musical Instruments (DMIs) for people with intellectual disabilities (Samuels, 2014). These new technologies and instruments have enabled many people with intellectual disabilities to play music, who otherwise might not have the opportunity.

However, our group feels that a musical instrument focused on simplicity and fun would be more suitable for children with profound physical and intellectual disabilities. These elements would make it easier and more enticing for children to collaborate in playing music.

### Ethical Considerations

Due to the length of this project, we were unable to receive user feedback on our finished project. However, if this were to be tested, some ethical considerations to consider include ensuring that our target users, who are the children with profound disabilities in Rullen, are treated with respect and dignity. We would also need to ensure that they are not subjected to harm or discomfort in any way. We would do this by seeking approval from the school authority, as well as the course coordinator, before letting the children try the product.

## Method

We formed the idea for the project when we first visited Rullen, and thereafter we had to decide how to implement it. We had a group discussion among team members as well as others involved in the class and came up with ideas of a collaborative digital and physical musical instrument. Inspired by the popular game “Guitar Hero”, our project, “Button Hero” would be implemented much the same way in both the digital and physical form.

### Implementation

The physical “Button Hero” uses a Bela board as the computing hardware and C++ as the programming language. The materials used to create the instrument are a Bela board, three buttons, three speakers, and some wires and transistors. Buttons with built-in LEDs and speakers are connected to the Bela board and contained within a wooden casing, made using a laser cutter.

For demonstration purposes, the instrument plays a children’s song, although the song could be easily changed to cater to the preferences of the children. The duration of the song (which is triggered on button press) could also be adjusted. For example, the song could play for .5 seconds for a more advanced player, and 3 seconds for a beginner. These parameters allow the caretakers to adjust the difficulty level of the game, which enables them to accommodate a wider range of abilities.

The digital “Button Hero” uses JavaScript for the programming language and Howler.js to control the audio. In addition, to facilitate communication between multiple devices and synchronize the song between them, we used Firebase Realtime Database. Similar to the physical version, the song and duration parameters can be changed to the user’s preference.

In both versions, each player takes turns pressing a button (physical or digital)that plays the next snippet of the song. Also, players can see visually whose turn it is, either through the button LED or a visual message displayed on a device screen.

## Results and Analysis

For the physical form, “Button Hero” consists of three movable wooden boxes with a button on each. To encourage collaboration, each child, in a group of three at a time, will be controlling one of the wooden boxes. In order to play the whole song, the different buttons need to be pressed in the correct order. The next button to press (indicated by an LED light) is randomized. When the lit button is pressed, the next few seconds of the song will continue to play. As such, all of the children will get the chance to participate in the activity and be a part of a collaboration.

The light to indicate which button to press adds an element of fun as children respond positively to light. This would also allow children who have difficulties recognizing songs to still be able to join the music playing activity.

![physical instrument](/assets/img/2020-03-20-ButtonHero/physical.jpg)

Button Hero (Physical Form)
{: .caption}

For the digital form, each child will be given a device that is able to open our instruments [website](https://instrument-71113.firebaseapp.com/). Similar to the physical form, the children will have to collaborate by tapping their screens when they turn green in order to play the whole song. The digital “Button Hero” is more scalable than the physical one as it is able to accommodate as many devices as desired.

![digital instrument](/assets/img/2020-03-20-ButtonHero/digital.png)

Button Hero (Digital Form)
{: .caption}

With our focus on fun and interaction, we hope that the children at Rullen show enthusiasm towards this musical instrument. We can foresee that not all of the children would be able to grasp the concept of music, which was why we included the element of light. We hope that this visual cue would help them to still be able to participate and enjoy the game so that even though the children are not communicating verbally with each other, they will still be able to collaborate in a meaningful way. Furthermore, using songs rather than abstract notes, will make it easier for the children to recognize and appreciate the song.

All in all, we believe that our musical instrument is able to achieve our intended outcome, which is to create an easy and fun medium for children with profound intellectual disabilities to have fun and collaborate with other children through music.

## Discussion

Due to the short amount of time given to this project, as well as other unforeseen factors, we were unable to test our instrument with our target user group at Rullen. However, we were able to test and get feedback from other members of the class both while designing and building the instrument, as well as after we had finished and presented the final product.

In regards to our original goals of simplicity and encouraging collaboration, the physical instrument did very well. The physical version was extremely simple because each player only had basic physical buttons to control, which ensured that the only choice they had to interact with the instrument was to press the button, which reduced the likelihood that the instrument's purpose would be misinterpreted. We found that almost no one had to be given explicit instructions to work the instrument, and were able to become comfortable with the button after a very short time. We attributed this both in part to the limited choices available for user input, as well as the clear visual and audio feedback that the buttons and speakers provide to the user.

<iframe src="https://player.vimeo.com/video/396985870" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

Buttons during play
{: .caption}

The collaborative aspect of the physical instrument worked as intended, although, with only three buttons, it was not possible with the first iteration of our design to achieve the level of collaboration that we had originally planned to. However, this prototype showed us that the concept of many people playing with independent button(s) would be something that could work well. In addition, the code and hardware were explicitly designed so that if new buttons were created, they could be added easily to the preexisting system.

The digital version of the instrument was a bit more complicated than the physical one when getting started. Since it required users to enter in a username, and gave the option to clear and start a new game, there were many more buttons that the user could be confused by, or hit accidentally. However, after being given directions by the person leading the session, there was not much confusion among the participants, as they only had to focus on hitting a single button..

The collaborative aspect of the digital version was much better than the current version of the physical version. Because each player only required a device with an internet connection, there was no upper bound on the number of people that could play in a single game. That does add in some new challenges however, as we found that playing with a large number of people can often make the game slower and less interactive for all who are involved.

![class](/assets/img/2020-03-20-ButtonHero/class.png)

8 participants using Button Hero simultaneously
{: .caption}

One of the design decisions that brought up much discussion among those who used our instrument was that of the speaker’s location. When planning the project, it was decided that each button (or digital device), would have its own speaker, rather than have one speaker for the entire system. This was done so that each participant could explicitly see the effect that the press of the button was having. However, several participants pointed out that it would be difficult to hear the entire song if the buttons/devices were spread out across a room. This would be an aspect that we would place under further consideration if we were to refine the instrument's design.

Another outcome of the instrument that surprised us was the ability of the instrument to function as a stimulating single-player experience. Because the timing parameters of the instrument were easily adjustable, the game could be tailored to match the abilities of the user, which allowed us to challenge those with even the sharpest reflexes.

### Criticism

As previously mentioned, the instrument currently consists of a digital and physical version. Each version has its own unique shortcomings, many of which could be solved by properties that the other version contains. Ideally, these two models would be combined into one system, where you can connect a physical button to a digital device so that a player can use a tactile to control the game, rather than a digital screen. This would seek to combine the advantages of both versions into one product that is both intuitive and adaptive.

In its current form, getting started with the digital version of the instrument can be confusing due to the user interface being more complicated than a single button. However, if the physical and digital forms of ‘Button Hero’ were to be combined (as suggested above), then this problem would be mitigated.

Another limitation of the digital instrument is that it is currently only possible for there to be a single game at a time. This is a problem that has a relatively simple solution which has not yet been implemented due to time constraints on the project.

The current appearance of the physical ‘Button Hero’ is not as finished as it could be. Due to material limitations, shortcuts were made regarding the aesthetics of the housing of the main components, such as the Bela board. In the future, a more attractive, durable, and permanent housing could be built for the components. Furthermore, the strength of the lights on the buttons, as well as the volume of the speakers is currently limited because our current setup does not provide enough voltage to take full advantage of those components.

## Conclusion

Using both physical and digital technologies, our group created an instrument that allowed a single song to be played by multiple participants. Although we were unable to test the final product with our target user group, we received feedback from other members in the class and are reasonably confident that this instrument could be utilized in classrooms such as Rullen to promote a healthy, fun experience through music.

Overall, our instrument largely accomplished the goals that were originally set forth: to make an intuitive instrument that encourages creativity between children with various kinds of mental and physical disabilities.

In the future, work could be done to combine the digital and physical forms of the instrument into a single product, one that takes the best parts of both. However, the most important future work would be to collaborate with possible end-users (children with disabilities) to iterate on the current design and ensure that it meets the needs of those who will be using the instrument.

REFERENCES

1. Assembly, U.G. Universal Declaration of Human Rights; UN General Assembly: New York, NY, USA, 1948. Available online: https://www.un.org/en/udhrbook/pdf/udhr_booklet_en_web.pdf
2. Hooper, J., Wigram, T., Carson, D., & Lindsay,B., A review of the music and intellectual disability literature (1943-2006) II: Experimental writing. Music Therapy Perspectives, 26(2), 2008, p. 80-96
3. Samuels, K. Enabling Creativity: Inclusive Music Interfaces and Practices. In Proceedings of the International Conference on Live Interfaces (ICLI), Lisbon, Portugal, 19–23 November 2014.
