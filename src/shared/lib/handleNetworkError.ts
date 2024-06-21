import { isAxiosError } from 'axios'
import { TEXTS } from 'src/shared/const'

export const handleNetworkError = (e: unknown): string => {
    const lang = 'en'
    let error: string = TEXTS[lang].SOMETHING_WENT_WRONG

    if (isAxiosError(e)) {
        error = e.response?.data.message || e.message || error
    } else if (e instanceof Error) {
        error = e.message
    } else {
        error = JSON.stringify(e)
    }

    console.error(error)
    return error
}
