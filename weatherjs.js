const apiKey = "c2de63dece66f609efbe407077d0e48a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
 const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

 if(response.status == 404){
     document.querySelector(".error").style.display = "block";
     document.querySelector(".weather").style.display = "none";
 }
 else{
     var data = await response.json();

     console.log(data);

     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
     document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
     document.querySelector(".wind").innerHTML = data.wind.speed+"km/hr";

     if(data.weather[0].main == "Clouds"){
     weatherIcon.src = "weatherimg/clouds.png";
     }
     else if(data.weather[0].main == "Clear"){
     weatherIcon.src = "weatherimg/clear.png";
     }
     else if(data.weather[0].main == "Rain"){
     weatherIcon.src = "weatherimg/rain.png";
     }
     else if(data.weather[0].main == "Drizzle"){
     weatherIcon.src = "weatherimg/drizzle.png";
     }
     else if(data.weather[0].main == "Mist"){
     weatherIcon.src = "weatherimg/mist.png";
     }
 }
}
searchBtn.addEventListener("click", ()=>{
 checkWeather(searchBox.value);
})