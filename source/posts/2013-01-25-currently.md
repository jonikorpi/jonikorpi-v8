**I'm currently working on** the following problems:

1. Designing an adaptive layout that makes sense on large screens.
2. Cutting down on the amount of time it takes to design and build a good adaptive website.
3. Making the results of an adaptive design process more beautiful.

**This site uses a prototype layout** that attempts to solve these problems. It's still very experimental and **will break** or become difficult to use with some device and browser combinations, but I'm working on it.

This layout flexes vertically and stacks sections horizontally (the opposite of what a responsive layout does), with one exception: if the viewport is narrower than a section's width, the section flexes horizontally.

Currently this design uses **zero** media queries. It was very fast to build.

While each section in a responsive design has [3 states](http://www.designbyfront.com/demo/goldilocks-approach/): _too big, too small_ and _just right,_ the sections in this design only has two: _too small_ and _just right._ The vertical flexing and horizontal stacking take care of _too big._ This removes a huge amount of required complexity from the design, leaving more time and opportunities for making interesting design decisions.