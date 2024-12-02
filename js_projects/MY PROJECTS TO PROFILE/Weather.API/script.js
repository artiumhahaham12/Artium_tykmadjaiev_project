
//set varibles
const API_KEY = "00f66c7ff8e10c4f881eb9d2d7b24151"
const today_url = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;
const fordcast_url = `api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}&units=metric`;
const query = document.querySelector("#input-city");
const button = document.querySelector("#Search-button");
const img_icon = document.querySelector("#weatherIcon");
const city = document.querySelector("#city");
const temperature = document.querySelector("#temperature");
const feel_like = document.querySelector("#feels_like");
const time_now = document.querySelector("#time_now");
const date_now = document.querySelector("#date_now");
const description = document.querySelector("#description");
const error_massage = document.querySelector("#error-massage");
let data_weather;
let fordcast_data;
//get coord

function FindClient() {
    try{if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(firstRun);
        firstRun();
    }
    else {console.log("geolocation not founded");
    }
    }
    catch(error) {
        console.log(error);
        
    }
}
    
async function firstRun(position) {
    try {
        
        
        let lat = position.coords.latitude; 
        let lon = position.coords.longitude; 
        
        
        let city_of_client = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
        city_of_client = await city_of_client.json();
        (city_of_client.name);
        await getWeather((city_of_client.name).toLowerCase());
        displaywWeather();
    } catch (error) {
        console.log(error);
        
    }
}
FindClient()

//the button start request

button.addEventListener("click", async () => {
    await getWeather(query.value);
    displaywWeather();
})
//request to API to get a data about the weather
async function getWeather(city) {
    try {
        if (city != "") {
            const response = await fetch(today_url + city);
            data_weather = await response.json();
            
        }
    } catch (error) {
        console.log("we have issue/" + error);
    }
}
//start only if success
async function displaywWeather() {
    if (data_weather.cod === 200) {
        showTheWeather();
        await showFordcast();
    }
}
//set the div parts of main container
function showTheWeather() {
    let weather_type = data_weather.weather[0].main;
    switch (weather_type) {
        case "Rain":
            img_icon.src = "./weather_imges/rainy.jpeg"
            break;
    
        case "Clear":
            img_icon.src = "./weather_imges/clear.jpeg"
            break;
        case "Clouds":
            img_icon.src = "./weather_imges/clouds.jpeg"
            break;
    
        case "Fog":
            img_icon.src = "./weather_imges/Fog.jpeg"
            break;
    
        case "Wind":
            img_icon.src = "./weather_imges/Wind.jpeg"
            break;
    
        default:
            break;
    }
    city.innerText = data_weather.name + "," + data_weather.sys.country
    temperature.innerText = (data_weather.main.temp).toFixed(0) + "c";
    temperature.style.fontSize = "3rem";
    feel_like.innerText = "feels like: " + (data_weather.main.feels_like).toFixed(0) + "c";
    time_now.innerText = `${new Date().toLocaleTimeString("HE").slice(0,5)}`;
    time_now.style.fontWeight = "bold"
    date_now.innerText = `${new Date().toLocaleDateString("HE").slice(0,100)}`;
    date_now.style.fontWeight = "bold"
    feel_like.style.fontSize = "1rem";
    description.innerText = data_weather.weather[0].description;

    query.value = ""
}
async function showFordcast() {
    try {
        let fordcast = document.getElementById("fordcast");
        fordcast.innerHTML = ``;
        fordcast_data = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}&units=metric&lat=${(data_weather.coord.lat)}&lon=${(data_weather.coord.lon)}`
        );
        fordcast_data = await fordcast_data.json(); 
        for (let i = 0; i < 40; ){
            
            i += 8
            
            
            fordcast.innerHTML += `<div class="col-3 m-1 ">
            <img id="weatherIcon" src="./weather_imges/${
              fordcast_data.list[i].weather[0].main
            }.jpeg">
            <h5 id="week-day" class="mb-2 fw-semibold" style="font-size:0.7rem;">${getDayName(
              fordcast_data.list[i].dt_txt
            )}</h5>
            <p id="date" class="m-1 fw-bold" style="font-size:0.7rem;">${new Date(
              fordcast_data.list[i].dt_txt
            ).toLocaleDateString("HE")}</p>
                <h4 id="temperature" class="fs-6 te">${(
                  fordcast_data.list[i].main.temp).toFixed(0)
                }c</h4>
                <h4 id="temperature-feels" class="fs-6 ">feels: ${
                  (fordcast_data.list[i].main.feels_like).toFixed(0)
                }c</h4>
                <p id="description">${
                  fordcast_data.list[i].weather[0].description
                }</p>

            </div>`;
        }

    
    } catch (error) {
        console.log(error);
        
    }
}
function getDayName(date) {
    date =new Date(date).getDay();
    let week_days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return week_days[date];
}





