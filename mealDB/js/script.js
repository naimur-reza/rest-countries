const loadMeals = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
    .then((res) => res.json())
    .then((data) => displayMils(data.meals));
};

const displayMils = meals => {
  meals.forEach(meal => {
    const mealsContainer = document.getElementById('meals-container')
    const newDiv = document.createElement('div');
    newDiv.classList.add('col');
    newDiv.innerHTML = `
  <div class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</p>
    </div>
</div>
    `
    mealsContainer.appendChild(newDiv)
    console.log(meal);
  })
}


//search method

loadMeals()