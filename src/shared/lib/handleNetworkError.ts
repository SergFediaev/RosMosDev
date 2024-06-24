import { isAxiosError } from 'axios'
import { TEXTS } from 'src/shared/const'
import { Lang } from 'src/shared/types/language.ts'

export const handleNetworkError = (e: unknown, lang: Lang): string => {
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
