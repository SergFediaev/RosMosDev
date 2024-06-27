import axios from 'axios'
import { randomWallpaperApiKey } from 'src/credentials/credentials.ts'

const baseURL = 'https://api.api-ninjas.com/v1/'

const headerApiKey = 'X-Api-Key'

const headerAccept = 'Accept'

const contentType = 'image/jpg'

const responseType = 'blob'

const endpoint = 'randomimage'

const category = 'nature'

const params = { category }

const instance = axios.create({
    baseURL,
    headers: { [headerApiKey]: randomWallpaperApiKey, [headerAccept]: contentType },
    responseType,
})

export const randomWallpaperApi = {
    async getRandomWallpaper() {
        const response = await instance.get<Blob>(endpoint, { params })
        return URL.createObjectURL(response.data)
    },
}
