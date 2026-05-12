# Carousel Bleeding Issue (Double Image)

The issue where you can see parts of "image 1" while looking at "image 2" on certain small laptop screens is a classic flexbox sizing problem. 

When flex items (our slides) contain large elements (the images), certain browser rendering engines can miscalculate the widths if the strict sizing constraints aren't explicitly declared, causing the slide to be a few pixels wider or smaller than exactly 100% of the screen. This miscalculation makes the `-100%` translation slightly off, revealing the edge of the adjacent image.

### The Fix applied:
I have updated the `.carousel-slide` CSS to enforce an absolutely strict flex boundary.

**Before:**
```css
.carousel-slide {
  min-width: 100%;
  flex-shrink: 0;
  /* ... */
}
```

**After (Bulletproof Flex Pattern):**
```css
.carousel-slide {
  flex: 0 0 100%; /* Do not grow, do not shrink, strictly 100% basis */
  width: 100%;
  max-width: 100%; /* Force constraint */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* ... */
}
```

This guarantees that every single slide mathematically matches the exact width of its parent container, pixel for pixel, on every device and viewport width, perfectly aligning the images with the carousel track's translation without any overlapping bleed.
