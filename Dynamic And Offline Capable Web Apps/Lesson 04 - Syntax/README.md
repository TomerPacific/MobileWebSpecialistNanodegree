# Lesson 04 - Syntax

## Concept 03 Quiz - Using Let and Const (1-1)

- Changed CHARACTER_LIMIT and posts to be of const type

- Changed iterator of for loop to be of let type

`/*
 * Programming Quiz: Using Let and Const (1-1)
 */
const CHARACTER_LIMIT = 255;
const posts = [
	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];
// prints posts to the console
function displayPosts() {
	for (let i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}
displayPosts();
`

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

    