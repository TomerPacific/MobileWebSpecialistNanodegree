# Lesson 13 - Styles and Layout

## Concept 02 Quiz - The Cost of Style Changes

> How does the performance cost of of Recalculate Styles scale with the number of elements affected by a style change?

`Linear`

## Concept 04 Quiz - Selector Matching

> Which CSS selector is fastest?

`.box-last > .title-container > .title` 

## Concept 08 Quiz - FSL

> Which of these 3 code snippets cannot caise a Forced Synchronous Layout warning?

`var newWidth = container.offsetWidth;
divs.forEach(function(elem, index, arr) {
    elem.style = newWidth;
)}`