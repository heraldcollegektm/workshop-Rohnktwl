
const timeZone = document.getElementById('timezone'); //selecting time by id 
const dateNow = document.getElementById('date'); //selecting date by id
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//for getting time 
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeZone.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ' : ' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateNow.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);
//using api key to fetch the weather
let weather = {
    
    apiKey: "4fe7108de6175b1e7ec829d751e2eb8c",
    fetchWeather: function () {
        let weather_data= JSON.parse(localStorage.getItem('weatherdata'));
        
        console.log(localStorage.when)
        if (localStorage.when!=null && parseInt(localStorage.when)+5000 > Date.now()) {
            console.log("cache data")
            this.displayWeather(weather_data);

        }
        else{
            fetch('http://localhost:8000/file.php')
            .then((response) => 
                response.json()).then((data) => {
                    console.log("fetch data")
                    console.log(data);
                    return data;
            })
            .then((data) =>{
                localStorage.setItem('weatherdata', JSON.stringify(data));
                localStorage.when=Date.now();
                this.displayWeather(data)
            });
        }
    },
    displayWeather: function(weather_data) {

        
        // let weather_data= JSON.parse(localStorage.getItem('weatherdata'));
        // localStorage.getItem
        const {name}=weather_data;
        const {description}=weather_data;
        const {icon}=weather_data;
        const {temp}=weather_data;
        const {pressure}=weather_data;
        const {humidity}=weather_data;
        const {deg}=weather_data;
        const {temp_max,temp_min}=weather_data;
        const {speed}=weather_data;
        const {sunrise,sunset}=weather_data;

        
        //viewing weather details in console
        console.log(name,icon,description,temp,humidity,speed,deg,pressure);
        // selcting weather details by using querySelector
        document.querySelector(".city").innerText = name
        document.querySelector(".description").innerText = description;
        document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = Math.round(temp) + ' °C'
        document.querySelector(".pressure").innerText = pressure + ' hPa'
        document.querySelector(".humidity").innerText = humidity + '%'
        document.querySelector(".deg").innerText = deg+ ' °';
        document.querySelector(".max").innerText = Math.round(temp_max) + "°C" + " | " + Math.round(temp_min) + "°C"
        document.querySelector(".windspeed").innerText = speed + ' m/s'
        document.querySelector(".risetime").innerText = window.moment(sunrise * 1000).format('HH:mm a');
        document.querySelector(".settime").innerText = window.moment(sunset * 1000).format('HH:mm a');

        document.querySelector(".large").classList.remove("loading")
    },
    // making search function to searh the location
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

//using event listener to enable search after clicking button
document
    .querySelector(".search button")
    .addEventListener('click', function () {
    weather.search();    
});
// //using event listener to enable search after pressing enter
document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if(event.key=="Enter") {
            weather.search(); 
        }
    });

//for initial city (Guilford)
weather.fetchWeather("Guildford");
