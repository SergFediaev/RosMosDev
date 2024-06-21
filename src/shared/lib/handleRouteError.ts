import { Lang } from 'src/shared/types/lang.ts'
import { isRouteErrorResponse } from 'react-router-dom'
import { TEXTS } from 'src/shared/const'

export const handleRouteError = (error: unknown, lang: Lang) => {
    if (isRouteErrorResponse(error)) return `${error.status} ${error.statusText}`

    if (error instanceof Error) return error.message

    if (typeof error === 'string') return error

    console.error(error)
    return TEXTS[lang].UNKNOWN_ERROR
}
