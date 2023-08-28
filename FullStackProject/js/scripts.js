const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
})

const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function () {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
})

const apiKey = process.env.OPEN_WEATHER_API_KEY; 
const city = 'toronto'; 
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

async function fetchWeather() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      //console.log(data.main);
      //console.log(data.name);
      //console.log(data.weather[0].icon);
      displayWeather(data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
  
fetchWeather();

function displayWeather(data) {
  
  const temperature = data.main.temp + `\u00B0`;
  const tempDescription =  data.weather[0].description;
  const tempIcon = data.weather[0].icon;
 
  const iElement = document.querySelector('#weather-icon');
  const tempSpan = document.querySelector('#weather-temp');
  const descSpan = document.querySelector('#weather-description');

  const imgElement = document.createElement('img');
  imgElement.src = `https://openweathermap.org/img/w/${tempIcon}.png`;
  iElement.appendChild(imgElement); 

  tempSpan.textContent = temperature;
  descSpan.textContent = tempDescription; 

}
