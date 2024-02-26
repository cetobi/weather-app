import axios from 'axios'

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.EXPO_PUBLIC_OPENWEATHER_API}&units=metric&lang=pt_br`
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.EXPO_PUBLIC_OPENWEATHER_API}&units=metric&lang=pt_br`
const geocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?appid=${process.env.EXPO_PUBLIC_OPENWEATHER_API}&limit=3`

export async function getCurrentWeather(lat: number, lon: number) {
    try {
        const response = await axios.get(`${weatherUrl}&lat=${lat}&lon=${lon}`)
        return response.data
    } catch (error) {
        console.log('Error openweather: ' + error)
    }
}

export async function geocoding(location: string) {
    try {
        const response = await axios.get(`${geocodingUrl}&q=${location}`)
        return response.data[0]
    } catch (error) {
        console.log('Error geocoding: ' + error)
    }
}

export async function forecast(lat: number, lon: number) {
    try {
        const response = await axios.get(`${forecastUrl}&lat=${lat}&lon=${lon}`)
        return response.data
    } catch (error) {
        console.log('Error forecast:'+ error)
    }
}