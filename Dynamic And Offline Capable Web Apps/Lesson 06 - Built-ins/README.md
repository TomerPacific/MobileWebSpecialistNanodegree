# Lesson 06 - Built-ins

## Concept 09 Quiz - Using Sets

> Create a variable with the name myFavoriteFlavors and give it the value of an empty Set object. Then use the .add() method to add the following strings to it:

- "chocolate chip"
- "cookies and cream"
- "strawberry"
- "vanilla"

> Then use the .delete() method to remove "strawberry" from the set.

`let myFavoriteFlavors = new Set();
myFavoriteFlavors.add("chocolate chip");
myFavoriteFlavors.add("cookies and cream");
myFavoriteFlavors.add("strawberry");
myFavoriteFlavors.add("vanilla");
myFavoriteFlavors.delete("strawberry");`

## Concept 11 Quiz - Working With WeakSets

> Create the following variables:

- uniqueFlavors and give it the value of an empty WeakSet object
- flavor1, and set it to the object { flavor: 'chocolate' }
- flavor2, and set it to an object with a property of flavor and a value of your choice

> Use the .add() method to add the objects flavor1 and flavor2 to uniqueFlavors.

> Use the .add() method to add the flavor1 object to the uniqueFlavors set, again.

`let uniqueFlavors = new WeakSet();
const flavor1 = {flavor: 'chocolate'};
const flavor2 = {flavor: 'vanilla'};
uniqueFlavors.add(flavor1);
uniqueFlavors.add(flavor2);
uniqueFlavors.add(flavor1);
`