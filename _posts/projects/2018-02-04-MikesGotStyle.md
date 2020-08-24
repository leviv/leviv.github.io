---
layout: post
title: "MikesGotStyle — Bringing CS Department Websites into the 21st century"
category: projects
tag: project
---

The first day of CS 312: Intro to Programming, everyone was nervous. The room full of ~100 computer science freshman was dead silent as the professor Mike Scott read the syllabus and what was to come in the course, referencing many times to links on his class website. After going through many points on the syllabus, he paused and asked the class, “Is there any questions? Feel free to ask anything at all, don’t be shy.” The room remained quiet until I raised my hand to ask a genuine question that I had about the course.

“Why is your website so poorly designed, even though you’re a computer science professor?” I asked, fully believing that the site had been designed by the University. Immediately the room erupted into laughter, while the instructor stood at the front, looking at me in shock, horror, or anger, I wasn’t yet sure which. However, once the laughter died down, he said, “Wow… wow… What is your name?” To which I sheepishly responded with my name, along with a stammered explanation about how I didn’t have any malicious intent with my previous comments.

Luckily, Mike Scott took the comment with good humor, explaining that he had, in fact, made the website himself, but that he wasn’t paid according to how good his website was, so he would rather spend his time on something that mattered more. Thankfully, he said that he appreciated my question, as it helped break the ice on that fateful first day of class.

However, that question was not without consequences. From that day on, Mike Scott constantly sought me out in class to ask a difficult question and remind everyone that I had made fun of his website.

But in my defense:

![Old homepage](/assets/img/2018-02-04-MikesGotStyle/old.png)

It’s pretty bad.

Thus, I hatched a plan to bring this inside joke full circle and solved the design calamity that was Mike Scott’s website.

## The Fix

Having just made [my first chrome extension at my first hackathon](https://medium.com/@villarreallevi/mypage-a-chrome-extension-for-dyslexia-2e48035b913), I came up with the idea to create a chrome extension to make the CS312 website ten times better. Working with my classmate Chris Nunes, we started developing a chrome extension that, when installed, would override the styles that were on the current website.

However, as we dived into the code for the site, we realized that there was only one line of CSS, and it was to set the background to that awful green texture. All of the other styles and structure was done in the HTML, mainly with tables. This made the problem harder, as we wanted to avoid directly editing the HTML, and tables are notoriously hard to style well. However, we were able to work these problems and launch the site right before finals week.

![New homepage](/assets/img/2018-02-04-MikesGotStyle/new.png)

As you can see, the site with the extension preserves all of the same HTML content but styles it to make it look much more pleasing. In addition, it adds a nav bar that slides in from the left and allows the user to navigate the site from any page, something that was not available in the original site.

## Comparison

![Old assignments page](/assets/img/2018-02-04-MikesGotStyle/compare1.png)

![New assignments page](/assets/img/2018-02-04-MikesGotStyle/compare2.png)

This extension completely changes the look and feel of the site, and it is now a joy for me to use throughout this semester.

## Feedback

After finishing the extension, we showed the results to our instructor Mike Scott, who thought it was very cool (although I doubt he uses it on his personal computer), and gave us permission to present it in class and online. Thus, we posted it on our class discussion page and gave a short demo to the class, who never expected it to go this far.

So far we have seen mostly positive feedback from our classmates, although some have had compatibility issues with their machines, we have since fixed most of those problems. It’s always a great site to see (pun intended) when I walk into the computer science building and see students looking at the assignment page with the chrome extension active.

## Use it! Change it!

To experience the new site for yourself, download the extension [here](https://chrome.google.com/webstore/detail/mikes-got-style/bpfphblljclepkkgcemfhckcebchiled), and go [here](http://www.cs.utexas.edu/~scottm/cs312/) to visit the 312 website. I hope that you will be able to judge for yourself which is the better site. In addition, feel free to [fork this project on Github](https://github.com/leviv/Mikes-Got-Style) if you have been inspired to the same for the terrible websites in your life.

## Conclusion

This project started out as a joke, but eventually became one of my favorite things that I worked on this past semester. I plan on doing more side projects like MikesGotStyle this semester and hope to improve much more websites in my lifetime.
