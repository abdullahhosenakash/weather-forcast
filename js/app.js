const APIKey = `d439f3eee4f7d4ae484428e2e259aad2`;

// onclick 
document.getElementById('search-button').addEventListener('click', () => {
    const cityNameText = document.getElementById('city-name');
    const cityName = cityNameText.value;
    cityNameText.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data));
});

const displayTemparature = temperature => {
    console.log(temperature)
    document.getElementById('display-city').innerText = temperature.name;
    document.getElementById('display-temperature').innerText = temperature.main.temp;
    document.getElementById('display-weather-condition').innerText = temperature.weather[0].main;
    const iconUrl = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    document.getElementById('display-weather-icon').setAttribute('src', iconUrl);
}