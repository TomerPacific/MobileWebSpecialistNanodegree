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

## Concept 20 Quiz - Building Classes and Subclasses(2-3)

> Create a Bicycle subclass that extends the Vehicle class. The Bicycle subclass should override Vehicle's constructor function by changing the default values for wheels from 4 to 2 and horn from 'beep beep' to 'honk honk'.

`class Bicycle extends Vehicle {
    constructor(color, wheels = 2, horn = 'honk honk'){
        super(color, wheels, horn);
    }
    honkHorn() {
        console.log(this.horn);
    }
}`