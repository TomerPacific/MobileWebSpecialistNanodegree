# Lesson 13 - Styles and Layout

## Concept 02 Quiz - The Cost of Style Changes

> How does the performance cost of of Recalculate Styles scale with the number of elements affected by a style change?

`Linear`

## Concept 04 Quiz - Selector Matching

> Which CSS selector is fastest?

`.box-last > .title-container > .title` 

## Concept 07 Quiz - FSL

> Which of these 3 code snippets cannot caise a Forced Synchronous Layout warning?

`var newWidth = container.offsetWidth;
divs.forEach(function(elem, index, arr) {
    elem.style = newWidth;
)}`

## Concept 08 Quiz - Stopping FSL Strategy

> What can reasonably be done to avoid FSL?

`Read layout properties then batch style changes`

## Concept 10 Quiz - Stop FSL

Refactored sizeSwitcher and changePizzaSizes to the following:

`// Iterates through pizza elements on the page and changes their widths
    function changePizzaSizes (size) {
      switch(size) {
        case "1":
          return 25;
        case "2":
          return 33.3;
        case "3":
          return 50;
        default:
          console.log("bug in sizeSwitcher");
      }
    var randomPizzaContainer = document.querySelectorAll(".randomPizzaContainer");
    for (var i = 0; i < randomPizzaContainer.length; i++) {
      randomPizzaContainer[i].style.width = newwidth;
    }
  }`