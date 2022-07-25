const timeEl = document.getElementById('timezone');
const dateEl = document.getElementById('date');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY ='4fe7108de6175b1e7ec829d751e2eb8c';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ' : ' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);
let weather = {
    apiKey: "4fe7108de6175b1e7ec829d751e2eb8c",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
        .then((response) => {
            if (!response.ok) {
            alert("Error! Please name your city corrrectly");
            throw new Error("Error in finding city");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon,description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { pressure } = data.main;
        const { temp_max } =data.main;
        const { temp_min } =data.main;

        const { sunrise } =data.main;
        const { sunset } =data.main;
        timezone.innerHTML = data.timezone;
        // const { timezone } =data.main;
        
        console.log(name,icon,description,temp,humidity,speed,pressure);
        document.querySelector(".city").innerText = name
        document.querySelector(".description").innerText = description;
        document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = temp + ' °C'
        document.querySelector(".pressure").innerText = pressure + ' hPa'
        document.querySelector(".humidity").innerText = humidity + '%'
        document.querySelector(".max").innerText = temp_max + "°" + " | " + temp_min + "°C"
        document.querySelector(".windspeed").innerText = speed + 'km/h'
        // document.querySelector(".risetime").innerText = window.moment(sunrise * 1000).format('HH:mm a');
        // document.querySelector(".settime").innerText = window.moment(sunset * 1000).format('HH:mm a');

        document.querySelector(".large").classList.remove("loading")
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document
    .querySelector(".search button")
    .addEventListener('click', function () {
    weather.search();    
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if(event.key=="Enter") {
            weather.search(); 
        }
    });

    weather.fetchWeather("Guildford");
