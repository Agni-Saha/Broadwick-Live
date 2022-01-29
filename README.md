## [Original Website](https://broadwicklive.com/)

## [Hosted link](https://broadwick-live.vercel.app/)

## There are two reasons behind using Locomotive Scroll -
1. Simple Smooth Scroll, although it can be achieved using CSS and JS also
2. Fixed elements scrolling while target is in view. I couldn't figure this one \ using JS and CSS. If I can, then I'll definitely remove Locomotive

## The problems I faced while creating this -
1. First and foremost, the biggest problem is that we cannot use window.scrollY and/or document.body.scrollTop, and so position fixed, relative, absolute won't work here
2. Because of reason 1, I couldn't do the simple fixed navbar on scroll feature.
3. Fixing elements on scroll is not that easy here, because you need to put the contents of the target and the fixed element in the same grid. And so, a lot of hardcoded values are used here.
4. The documentation of locomotive scroll is pretty useless. The main thing that took me a lot of time to figure out is that every element that has data-scroll will have a progress property, which defines how much of the content is in view. This is the only way to check if the content is in view or not, since window and body scroll properties don't work here.

## Things that are remaining -
1. Responsiveness. I couldn't make it responsive, I don't feel like spending that amount of energy into this. Instead I'll work on other projects.
2. Loading animation. I think I can do this using GSAP or Framer Motion. I'll do it probably.
3. Fixing the navbar on scroll up and removing it on scroll down. I'm figuring this one right now.

## Ideas I have right now regarding these problems
1. Maybe there are some JS and CSS codes that I can get. If anyone can help me regarding this, it'll be highly appreciated.
2. Maybe intersection observer combined with JS/CSS can help me do the fixed element scrolling. I dunno tho.
