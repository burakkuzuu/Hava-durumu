const apiKey = "3ed48c730665b75384107d1b8a70cb7f";
const searchButton = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const weatherInfo = document.getElementById("weather-info");

searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                weatherInfo.innerHTML =`
                <h2> ${data.name}</h2>
                <p>Sıcaklık: ${data.main.temp}°C</p>
                <p>Hava: ${data.weather[0].description}</p>
                <p>Nem: ${data.main.humidity}%</p>
                <p>Rüzgar Hızı: ${data.wind.speed} km/h</p>
                `;
            } else {
                weatherInfo.innerHTML = `<p>Şehir bulunamadı!</p>`;
            }
        })
        .catch(error => console.error("Hata oluştu:", error));
});

