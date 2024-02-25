import axios from 'axios'
import { OPENWEATHER_API } from '@env'

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${OPENWEATHER_API}&units=metric&lang=pt_br`
const geocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?appid=${OPENWEATHER_API}&limit=3`

export async function openweather(y: number, x: number) {
    try {
        const response = await axios.get(`${weatherUrl}&lat=${y}&lon=${x}`)
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