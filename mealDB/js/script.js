const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMils(data.meals));
};

const displayMils = meals => {
  const mealsContainer = document.getElementById('meals-container')
  mealsContainer.innerHTML = '';
  meals.forEach(meal => {
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
const searchMeals = () => {
  const searchField = document.getElementById('search-field').value;
  //go for search meal
  console.log(searchField);
  loadMeals(searchField)
}
loadMeals('fish')