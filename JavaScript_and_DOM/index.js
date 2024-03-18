// // 1. We store a reference to the element into a variable
// const headingElement = document.querySelector("h1");

// // 2. We can now interact with the element, e.g modify its text content
// headingElement.textContent = "🥗 Zoe's Cooking Blog! 🥙";

// // 3. We could also shorten the two lines above like this:
// document.querySelector("h1").textContent = "🥗 Zoe's Cooking Blog! 🥙";

    // // Update the heading
    // const headingElement = document.querySelector("h1");
    // headingElement.textContent = "🥗 Zoe's Cooking Blog! 🥙";

    // // Create and append the recipe list
    // const body = document.querySelector("body");
    // const recipeListEl = document.createElement("ol"); // Create an ordered list element

    // const stepOneEl = document.createElement("li");
    // stepOneEl.innerText = "Toast some bread";
    // recipeListEl.appendChild(stepOneEl);

    // const stepTwoEl = document.createElement("li");
    // stepTwoEl.innerText = "Spread butter on the toast";
    // recipeListEl.appendChild(stepTwoEl);

    // body.appendChild(recipeListEl);

    // console.log("Recipe list appended successfully."); // Debugging statement
    
    // const recipeTitle = document.createElement ('p');
    // recipeTitle.textContent = 'Burnt Basque';
    // body.appendChild(recipeTitle);

    // const recipeSteps = document.createElement('ol');

    // const stepOne = document.createElement('li');
    // stepOne.innerText = 'Whip double cream and cream cheese together';
    // recipeSteps.appendChild(stepOne)

    // const stepTwo = document.createElement('li');
    // stepTwo.innerText = 'Pour in cake tin and bake';
    // recipeSteps.appendChild(stepTwo)

    // body.appendChild(recipeSteps)

    // console.log("Second recipe appended successfully."); // Debugging statement


    const URL = 'https://official-joke-api.appspot.com/random_joke';

    fetch(URL)
    .then((response) => response.json())
    .then((joke) => {
        const setup = document.createElement('p');
        setup.textContent = joke.setup;
        body.appendChild(setup);
        const attachListener = () => {
            document.getElementById('my-button').addEventListener('click', () => {
                const punchline = document.createElement('p');
                punchline.textContent = joke.punchline;
                body.appendChild(punchline);
                console.log('did it!')
            });

          }
          attachListener()
    });

const body = document.querySelector("body");

