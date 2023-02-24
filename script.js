const countryLoad = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => functionCall (data))
}

const functionCall = countries => {
    countries.forEach()
}

countryLoad()