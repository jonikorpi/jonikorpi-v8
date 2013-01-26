**I'm currently working on** the following problems:

1. Designing a responsive layout that makes sense on large screens.
2. Cutting down on the amount of time it takes to design and build a good responsive website.
3. Making the results of a responsive design process more beautiful.

This site uses a prototype layout that attempts to solve these problems. Here's roughly how it works:

- Each section on a page is stacked horizontally.
- A section's content flows vertically.
- If a section's content is taller than the viewport, the section becomes scrollable.
- A section is never wider than the viewport.
- A section is never wider than what is optimal for its content.

The result is a page that you can scan through by scrolling horizontally, and when you find an interesting section, you can drill down on it by scrolling vertically. 

Also, it only requires 2 of the [3 states of a responsive design](http://www.designbyfront.com/demo/goldilocks-approach/): _just right_ and _too small._ The horizontal stacking takes care of _too big._ This leaves more opportunities for making interesting design decisions and cuts down on development time. (Currently, this design uses _zero_ media queries.)

The layout is still very experimental, so there are plenty of issues with it:

- Many touch devices fail at horizontal viewport scrolling.
- Many of them also fail at vertical overflow scrolling.
- Some of them can do both, but not at the same time.
- Many PCs are operated with the kind of mice and trackpads that make horizontal scrolling awkward.
- Horizontal scrolling can feel awkward on small screens.
- The layout is very _different,_ so it's going to trigger a negative reaction in change-averse people.

I'm still working on these issues. As the prototype advances, I'll be writing more about it. Right now, though, I'd like to give it a name. Any ideas? [Let me know on Twitter.](http://twitter.com/jonikorpi/)