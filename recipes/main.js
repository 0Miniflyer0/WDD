import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span
        class="rating"
        role="img"
        aria-label="Rating: ${rating} out of 5 stars"
    >`;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="image of ${recipe.name}" />
        <figcaption>
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2>${recipe.name}</h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p>${recipe.description}</p>
        </figcaption>
    </figure>`;
}

const randomRecipe = getRandomListEntry(recipes);

const container = document.getElementById('recipe-container');
container.innerHTML = recipeTemplate(randomRecipe);

function renderRecipes(recipeList) {
    const recipeContainer = document.querySelector("#recipe-container");
    const recipeHTMLStrings = recipeList.map(recipeTemplate);
      recipeContainer.innerHTML = recipeHTMLStrings.join("");
  }
  
  function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
  }
  init();

function searchHandler(event) {
    event.preventDefault();
    const query = document.querySelector("#search-input").value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
  }
  function filterRecipes(query) {
    return recipes
      .filter(recipe => {
        return recipe.name.toLowerCase().includes(query) ||
               recipe.description.toLowerCase().includes(query) ||
               recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
               recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query));
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }
  document.querySelector("#search-button").addEventListener("click", searchHandler);
  