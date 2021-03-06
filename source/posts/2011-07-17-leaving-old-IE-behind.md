---
title: Leaving Old Internet Explorer Behind
excerpt: Using media queries to make a clean break from legacy browsers.
layout: old-post
oldpost: true
---

This site was designed [Mobile First](http://www.lukew.com/ff/entry.asp?933). The styles that make up the mobile version of its layout, which I'll call the Narrow Layout from now on, are not inside a media query, while the styles that make up the wider versions are. As a result, browsers with no support for media queries will only see the Narrow Layout. This is a good thing.

Instead of enabling media queries in the browsers that don't support them, like Internet Explorer 6–8, I chose to simply serve them the Narrow Layout, slightly enhanced with Paul Irish's [IE conditional classes](http://paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/). 

For example, I gave the layout a static width to make sure the content never stretches uncomfortably wide, and made sure images always display at full size, since I had halved their maximum sizes in the Narrow Layout.

	body {
		width: auto;
	}
		.ie body {width: 540px;}
	
	#content figure {
		width: 240px;
		max-width: 100%;
	}
		.ie #content figure {width: 480px;}

As a result, old mobile browsers will see a fluid single-column layout, and IE6–8 will see a similar static-width layout, perfectly comfortable for reading even on larger screens.

<figure>
	<img src="/images/old-posts/leaving-old-IE-behind.jpg" alt="This site in IE7"/>
	<figcaption>This is roughly what this site looks like in IE7.</figcaption>
</figure>

So that's old IE and old mobile browsers taken care of. Now comes the fun part. Since I can be sure that legacy browsers won't be seeing any of the wider versions of my layout, I'm free to design them with the assumption that they'll be viewed in a browser that supports such [luxuries](http://caniuse.com/#eras=now,near,far&cats=CSS) as…
 
- 2D transforms
- CSS2.1 selectors: `+ > [attr]`
- most [CSS3 selectors](http://www.quirksmode.org/css/contents.html#CSS3)
- `:before` and `:after`
- `opacity`, `box-shadow`, and `text-shadow` 
- `min/max-width` and `min/max-height`
- `box-sizing` and `inline-block`
- `rgba()` and `hsla()`
- and even root-ems!

Suddenly all the shackles imposed by old IE are gone. _I can even use margins on floated elements._ I'll just let that sink in for a moment.

I think I'll be using this technique to deal with legacy browsers from now on. It requires no Javascript, no hacks, no separate stylesheets, and barely any effort, since single-column layouts rarely require the kind of advanced positioning that IE6 will have problems with. In this site's case, I had to write less than a dozen lines of CSS to make the Narrow Layout comfortable to view in old IE. Simple, effortless, and oh so liberating.