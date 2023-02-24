const countryLoad = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => functionCall (data))
}

const functionCall = countries => {
    const divContainer = document.getElementById('div-container')
    countries.forEach(country => {
        console.log(country.capital);
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <h3>Name : ${country.name.common} </h3>
        <h3>Official-Name : ${country.name.official} </h3>
        <p>Capital-Name : ${country.capital ? country.capital[0] : 'No-Capital'} </p>
        `
        divContainer.appendChild(newDiv)
    })
}

countryLoad()