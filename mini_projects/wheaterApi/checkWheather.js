import readline from "readline/promises"

const API_KEY = 'b14fe548cb94c5696b1d57827d797f44'

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


const getWheather = async (city) => {
    try {
        const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`

        const response = await fetch(url)

        if(!response.ok){
            throw new Error('City not found. Please check it again !')
        }
        const data = await response.json()
        console.log(data);
        console.log('\n Wheather Information:');
        console.log(`City:${data.name}`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Description: ${data.weather[0].description}`);
        console.log(`Humidity: ${data.main.humidity}%`);
        console.log(`Wind Speed: ${data.wind.speed} m/s\n`);

    } catch (error) {
        console.log(error);
    }
}

const city = await rl.question("Enter a city to get its wheather:")
await getWheather(city)
rl.close()