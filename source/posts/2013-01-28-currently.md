**This site uses a prototype layout** that attempts to solve the following problems:

1. Designing a responsive layout that makes use of large screens.
2. Cutting down on the amount of time it takes to design and build a good responsive website.
3. Making the results of a responsive design process more beautiful.

Here's how it works:

- Each section on a page is stacked horizontally.
- A section's content flows vertically.
- If a section's content is taller than the viewport, the section becomes scrollable.
- A section is never wider than the viewport.
- A section is never wider than what is optimal for its content.

The result is a _bi-directional layout_. Unlike in a traditional vertical layout, you can quickly scan through each section by scrolling horizontally, and when you find an interesting one, you can drill down on it by scrolling vertically.

Also, the design of each these sections only requires 2 of the [3 states of a responsive design](http://www.designbyfront.com/demo/goldilocks-approach/): _just right_ and _too small._ The horizontal stacking takes care of _too big._ This leaves more opportunities for making interesting design decisions and cuts down on development time.

***

**The layout is still very experimental,** so there are plenty of problems to solve with it. So far, I've come across these:

- Many mice and trackpads are terrible at horizontal scrolling.
- Horizontal scrolling can feel awkward on small screens.
- Browser "back to top" shortcuts do not work.

There are bugs too, of course:

- Old iOS devices and Nokia N9 require two fingers to scroll sections.
- Android <3.0 browsers can't scroll sections at all.
- Opera Mini can't scroll sections either. (Oh crap.)
- Chrome on Android won't scroll horizontally. (Can be avoided by scrolling a wrapper `<div>` instead of the viewport, but that causes a variety of other issues.)
- Some mobile browsers initially zoom out to fit the entire page in the viewport horizontally.

If you run into any issues not listed here, please [tweet at me](http://twitter.com/jonikorpi/).