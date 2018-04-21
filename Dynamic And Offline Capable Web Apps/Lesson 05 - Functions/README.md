# Lesson 05 - Functions

## Concept 04 Quiz - Convert Function into an Arrow Function(2-1)

> Convert the function passed to the map() method into an arrow function.

`const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(square => square * square);`

## Concept 11 Quiz - Using Default Function Parameters(2-2)

> Create a buildHouse() function that accepts an object as a default parameter. The object should set the following properties to these default values:

- floors = 1
- color = 'red'
- walls = 'brick'

> The function should return the following if no arguments or any empty object is passed to the function.

`function buildHouse({floors = 1, color = 'red' , walls = 'brick'} = {}) {
 return ``Your house has ${floors} floor(s) with ${color} ${walls} walls.``;   
}`