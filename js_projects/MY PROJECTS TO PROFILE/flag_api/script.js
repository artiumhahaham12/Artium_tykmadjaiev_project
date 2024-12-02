
/* axios.get(`https://restcountries.com/v3.1/capital/jerusalem`).then((response) => { console.log(response.data);
(response.data[0]) }); */

async function getCountry(capital) {
    try {
        let by_what = "capital city"
        let country = await axios.get(
        `https://restcountries.com/v3.1/capital/${capital}`
        );
        country = await axios.get(
        `https://restcountries.com/v3.1/capital/${capital}`
        );
        let language = Object.values(country.data[0].languages);
        changeData(
            country.data[0].capital,
            country.data[0].flags.png,
            country.data[0].name.common,
            country.data[0].population,
            country.data[0].region,
            language,by_what
        );
        
    } catch (error) {
        console.log("continue");
        
    }
}
//2
async function getCountryByName(name) {
    try {
        let by_what = "country name";
    let country = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
    );
    let language = Object.values(country.data[0].languages);
    
    changeData(
        country.data[0].capital,
        country.data[0].flags.png,
        country.data[0].name.common,
        country.data[0].population,
        country.data[0].region,
        language,
        by_what
    );
} catch (error) {
    console.log("continue");
}
}
//3

function searchCountry() {
    let input = document.getElementById("input").value;
    getCountry(input);
    getCountryByName(input);
}
function reset(){
    document.getElementById("input").value = "";

}
function changeData(capital, img_url, country_name, population, region, laguages, by_what) {
    document.getElementById(
    "by-what"
    ).innerHTML = `<h6 id="by-what" class="fs-5" style="margin-top: 2rem;">searched by: <span class="text-success fw-bold text-decoration-underline">${by_what}</span></h6>`;
    document.getElementById("capital").innerText = `capital city: ${capital}`;
    document.getElementById("flag").src = `${img_url}`;
    document.getElementById("country-name").innerText = `${country_name}`
    document.getElementById(
      "population"
    ).innerText = `population: ${population.toLocaleString()}`;
    console.log(img_url);
    document.getElementById("region").innerText = `region: ${region}`;
    document.getElementById("laguages").innerText = `laguages: ${laguages}.`;
    
}




