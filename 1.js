/*    https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}      */
/*    a6299e19ecf8046a9f61cee2f361b1ba    */
  
   const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


   const searchBox =document.querySelector(".search-box  input");
   const searchBtn =document.querySelector(".search-box  button");
   const weatherImage =document.querySelector("#change");
        const apiKey ="06057501970114a760fe1a1d4f0a454b";
        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data= await response.json();

            console.log(data);
        document.querySelector(".input-box").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = data.main.temp + "<sup>°C<sup>";
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
        document.querySelector("#wind-speed").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".desc").innerHTML = data.weather[0].description;
        


        if (data.weather[0].main=="Clouds"){
            weatherImage.src="imgs/cloud.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherImage.src="imgs/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherImage.src="imgs/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherImage.src="imgs/snow.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherImage.src="imgs/mist.png";
        }
    }
    searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value);
        })