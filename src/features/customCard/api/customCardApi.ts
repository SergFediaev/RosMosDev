import axios from 'axios'
import { KEYS, TYPES } from 'src/shared/const'
import { CustomCard, DraftCard } from 'src/entities/card'

const baseURL = 'https://script.google.com/macros/s/'

const instance = axios.create({
    baseURL,
    headers: {
        [KEYS.CONTENT_TYPE]: TYPES.TEXT_PLAIN,
    },
})

const macrosId = 'AKfycbwHGQjf1vlKbY7UJ3h1OUTywJCgma6SlJi94WXaFBhS_93cdfHhIB0mVQBHqHRtbO4dQQ'

const endpoint = '/exec'

export const customCardApi = {
    createCard: (draftCard: DraftCard) => instance.post<CustomCard>(`${macrosId}${endpoint}`, draftCard),
}
