# Issues with this layout

This layout used on this site is still very experimental, so there are plenty of issues with it. So far, I've come across these:

- Many PCs are operated with the kind of mice and trackpads that make horizontal scrolling awkward. _(Fix: section by section navigation with clickable buttons and arrow keys?)_
- Horizontal scrolling can feel awkward on small screens. _(Fix: make horizontal swipes scroll section by section?)_
- The layout is very _different,_ so it's going to trigger a negative reaction in change-averse people.
- Old iOS devices, old Android devices and Nokia N9 require two fingers to scroll sections.
- Sony X10 Mini won't scroll sections at all.
- Scrollable sections could be indicated better in Webkit browsers. _(Fix: `-webkit-scrollbars`?)_
- [There appears to be a pea on one of the scrollbars.](https://twitter.com/benbrignell/status/295925510003908608)

Additionally, different issues appear depending on which method is used to make the page horizontally scrollable.

Using browser default scrolling _(currently used method):_

- Chrome on Android won't scroll horizontally.
- Some mobile browsers initially zoom out to fit the entire page horizontally in the viewport, instead of vertically.

Using `overflow:auto` and `overflow-scrolling` on a container:

- Chrome on Android won't scroll horizontally.
- Windows Phone 7 scrolls horizontally without inertia.
- Sony X10 Mini won't scroll horizontally.

Using just `overflow:auto` on a container:

- All iOS devices and Nokia N9 require two fingers to scroll horizontally.
- Windows Phone 7 scrolls horizontally without inertia.
- Sony X10 Mini won't scroll horizontally.

If you run into any issues not listed here, please [tweet at me](http://twitter.com/jonikorpi/).