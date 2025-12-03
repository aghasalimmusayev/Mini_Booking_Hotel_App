import axios from "axios"
import { RestCountry } from '../types/HotelBookingTypes'

const BASE_URL = 'https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/country.json'

async function getData(): Promise<RestCountry[]> {
    try {
        const res = await axios.get<RestCountry[]>(BASE_URL)
        return res.data
    }
    catch (err) {
        console.error('Error geting country data: ', err)
        return []
    }
}

export default getData