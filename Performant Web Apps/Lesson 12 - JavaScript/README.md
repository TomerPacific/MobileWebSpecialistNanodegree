
# Lesson 12 - JavaScript

## Concept 03 Quiz - Optimizing JS for Animations

> You have 10ms to prepare every frame. How do you make sure JS is out of the way as much as possible?

`Execute JS as early as possible every frame`

## Concept 06 Quiz - Long Running JS

> Analyze the site in the instructor notes. Which function takes longer to run?

`onSortOne`

## Concept 07 Quiz - Web Workers

In order to fix the jank in the code, it was required to remove the main code from image-apps.js to worker.js. It was also necessary to create a worker.js instance inside image-apps.js in order to use the code that was removed.

In order to fix the performance issue, it was necessary to remove the creation of the manipulation method out of the for loop inside imageManips.js.