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
    
            <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-toggle="modal" data-target="#mealsModal">
            More details
          </button>
    </div>
    </div>
    `
    mealsContainer.appendChild(newDiv)
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

//loads meals details
const loadMealDetail = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  fetch(url)
  .then(res => res.json())
  .then(detail => displayMealDetails(detail.meals[0]))
}

const displayMealDetails = (data) =>{
  const title = document.getElementById('mealsModalLabel')
  title.innerText = data.strMeal;
  const mealDetailsBody = document.getElementById('mealDetailsBody')
  mealDetailsBody.innerHTML = `
  <img class="img-fluid" src="${data.strMealThumb}" >
  <h5 class="mt-2">Category : ${data.strCategory} </h5>
  <h5 class="mt-2">Area : ${data.strArea} </h5>
  <h6>Recipe : ${data.strIngredient1},${data.strIngredient2},${data.strIngredient3},${data.strIngredient4},${data.strIngredient5},${data.strIngredient6}

  `
console.log(data);
  
}