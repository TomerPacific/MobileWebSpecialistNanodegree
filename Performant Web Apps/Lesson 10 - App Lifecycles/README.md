# App Lifecycles

## Concept 04 Quiz - Idle Time

> Which tasks should you handle during the post-load idle state?

- Image assests
- Videos
- Comments section

## Concept 08 Quiz - Rendering Animations

> Paul applied opacity and transform changes to reverse the animation. What steps in the rendering pipeline did he trigger?

`Composite`

## Concept 09 Quiz - Interactions and Animations

> What kind of interactions require 60 FPS animations?

- spinners
- scrolling
- drag-n-drop
- pinching
- pull-to-refresh
- side menu slide
- opening comments

## Concept 11 Quiz - RAIL Scenario 1

> Should the spinner image be requested during the animation phase?

`No! The request will take more than 16ms`

or 

`No! Even if the request finishes in less than 16ms, the overhead will stretch the frame over 16ms`

## Concept 12 Quiz - RAIL Scenario 2

> In the `~`50ms post-load idle phase, what tasks can you accomplish?

- FLIPing UI animations
- Starting below-the-fold async requests
- Fetching images for below-the-fold content