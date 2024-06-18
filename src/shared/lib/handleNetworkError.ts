import { isAxiosError } from 'axios'
import { text } from 'src/shared/const/const.ts'

export const handleNetworkError = (e: unknown): string => {
    let error: string = text['en'].SOMETHING_WENT_WRONG

    if (isAxiosError(e)) {
        error = e.response?.data.message || e.message || error
    } else if (e instanceof Error) {
        error = e.message
    } else {
        error = JSON.stringify(e)
    }

    return error
}
