// select HTML elements in the document
const currentCity = document.querySelector('#city');
const currentTemp = document.querySelector('#current-temp');
const highTemp = document.querySelector('#high');
const lowTemp = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');




const url = 'https://api.openweathermap.org/data/2.5/weather?lat=8.48&lon=8.57&appid=f805abda0a7f9229eb9d2df951e5714e&units=metric';


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentCity.innerHTML = `${data.name}`;
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  highTemp.innerHTML = `${data.main.temp_max}&deg;C`;
  lowTemp.innerHTML = `${data.main.temp_min}&deg;C`;
  humidity.innerHTML = `${data.main.humidity}%`;
  const iconsrc = ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', data.weather[0].description);
  captionDesc.textContent = `${desc}`;
}

