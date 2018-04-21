# Lesson 04 - Syntax

## Concept 03 Quiz - Using Let and Const (1-1)

- Changed CHARACTER_LIMIT and posts to be of const type

- Changed iterator of for loop to be of let type

## Concept 05 Quiz - Build an HTML Fragment(1-2)

Changing all access of animal variable properties to be of template literal

`const cardHTML = <div class="card">
        <h3 class="name"> ${animal.name}  </h3>
        <img src="${animal.name}.jpg" alt="${animal.name}" class="picture">
        <div class="description">
            <p class="fact">${animal.fact}  </p> 
            <ul class="details">
                <li><span class="bold">Scientific Name</span>: ${animal.scientificName}</li>
                <li><span class="bold">Average Lifespan</span>: ${animal.lifespan}</li>
                <li><span class="bold">Average Speed</span>: ${animal.speed}</li>
                <li><span class="bold">Diet</span>: ${animal.diet}</li>
            </ul>
            <p class="brief"> ${animal.summary} </p>
        </div>
    </div>`

## Concept 07 Quiz - Destructuring Arrays(1-3)
> Use array destructuring to pull out the three colors from the array of things and store them into the variables one, two, and three.

`const [one, , , two, , , ,three] = things;`

## Concept 13 Quiz - Writing a For...of Loop(1-4)

> Write a for...of loop that:

- loops through each day in the days array
- capitalizes the first letter of the day
- and prints the day out to the console

`for(const day of days){
    console.log(day[0].toUpperCase() + day.substr(1));
}`

## Concept 16 Quiz - Using the Rest Parameter(1-5)

> Use the rest parameter to create an average() function that calculates the average of an unlimited amount of numbers.

`function average(...nums) {
    let sum = 0;
    let amount = nums.length;
    if(amount === 0) return sum;
    for(const n of nums){
        sum += n;
    }
    return sum / amount;
}`