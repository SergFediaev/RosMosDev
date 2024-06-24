import axios from 'axios'
import { handleNetworkError } from 'src/shared/lib/handleNetworkError.ts'
import { VALUES } from 'src/shared/const'
import { Lang } from 'src/shared/types/language.ts'

type Address = {
    country_code: string
    country_name: string
    city: string
    postal: string
    latitude: number
    longitude: number
    IPv4: string
    state: string
}

const baseURL = 'https://geolocation-db.com/'
const endpoint = 'json/'
const instance = axios.create({ baseURL })

export const addressApi = {
    getAddress: async (lang: Lang) => {
        try {
            const response = await instance.get<Address>(endpoint)
            return Object.values(response.data).toString().split(VALUES.COMMA).join(VALUES.COMMA_SPACE)
        } catch (error) {
            handleNetworkError(error, lang)
        }
    },
}
