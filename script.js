const countryLoad = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => functionCall (data))
}

const functionCall = countries => {
    const divContainer = document.getElementById('div-container')
    countries.forEach(country => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('new-div')
        newDiv.innerHTML = `
        <h2>Name : ${country.name.common} </h2>
        <p>Capital-Name : ${country.capital ? country.capital[0] : 'No-Capital'} </p>
        <button class="btn" onclick="detailBtn('${country.cca2}')">Details</button>
        `
        divContainer.appendChild(newDiv)
    })
}


const detailBtn = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    console.log(url);
}
countryLoad()