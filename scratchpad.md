# Hero Section - Black Bars Fix

The user is complaining about black bars on the left and right of the images in the hero carousel, and wants a proper, dynamic fix for both desktop and mobile.

## Current State
- `.hero.hero-carousel` has `aspect-ratio: 16 / 9` and `max-height: calc(100vh - var(--navbar-height))`.
- `.carousel-img` has `object-fit: contain` and `background: #1a110b;`.

When the screen is wider than 16:9, the `max-height` restriction kicks in. The container stays 16:9, but it might not fill the full width of the screen, or if it does, the `object-fit: contain` with a dark background shows black bars on the sides because the image is scaled down to fit the height constraint.

Actually, if the container is 16:9 and the image is 16:9, `object-fit: contain` and `object-fit: cover` should do the exact same thing *within that container*. 

However, if the screen is wider than 16:9 (e.g., ultrawide monitor), a `width: 100%` container with `max-height: calc(100vh - 68px)` will *lose* its 16:9 aspect ratio if the height constraint is reached.
Wait, `aspect-ratio` with a `max-height` means the width will be constrained if the height is constrained? No, `width: 100%` forces the width. If height is constrained by `max-height`, the `aspect-ratio` is broken. The container becomes wider than 16:9.
Then `object-fit: contain` will letterbox the image on the left and right (black bars).

## The Proper Fix

A modern, premium hero section should *never* have black bars. It should always fill its container, using `object-fit: cover`.
To prevent excessive cropping while ensuring no black bars:
1.  **Remove `aspect-ratio: 16 / 9` from the container.** Let it be a flexible height.
2.  **Use `object-fit: cover` for the images.** This guarantees no black bars.
3.  **Define appropriate heights for desktop and mobile.** 
    - E.g., `min-height: 60vh; height: calc(100vh - var(--navbar-height));` for a full-screen feel.
    - Or maybe a fixed responsive height like `height: 70vh` on desktop, `height: 60vh` on mobile.
4.  **Remove the dark background** from the image/container.

Let's check `Hero.jsx`. We have `desktopSlides` (16:9) and `mobileSlides` (9:16).
Since we have different aspect ratio images for mobile and desktop, `object-fit: cover` is perfectly safe. It will crop slightly depending on the exact screen size, but the images are specifically chosen for their respective orientations.

Let's adjust `.hero.hero-carousel` and `.carousel-img`.
