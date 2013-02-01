# Issues with this layout

The layout used on this site is still very experimental, so there are plenty of issues with it. So far, I've come across these:

- Many mice and trackpads are terrible at horizontal scrolling. _(Keyboard navigation now enabled.)_
- Horizontal scrolling can feel awkward on small screens.
- Old iOS devices and Nokia N9 require two fingers to scroll sections.
- Android 1.6–2.3 browsers can't scroll sections at all.
- Browser "back to top" shortcuts don't work.

Additionally, different issues appear depending on which method is used to make the page horizontally scrollable.

Using browser default scrolling _(currently used method):_

- Chrome on Android won't scroll horizontally.
- Some mobile browsers initially zoom out to fit the entire page horizontally in the viewport, instead of vertically.

Using `overflow:auto` and `overflow-scrolling` on a container:

- Chrome on Android won't scroll horizontally.
- Windows Phone 7 scrolls horizontally without inertia.
- Android 1.6–2.3 browsers won't scroll horizontally.

Using just `overflow:auto` on a container:

- All iOS devices and Nokia N9 require two fingers to scroll horizontally.
- Windows Phone 7 scrolls horizontally without inertia.
- Android 1.6–2.3 browsers won't scroll horizontally.

If you run into any issues not listed here, please [tweet at me](http://twitter.com/jonikorpi/).