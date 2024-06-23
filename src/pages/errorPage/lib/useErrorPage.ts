import { EVENTS, KEYS, PATHS, SYMBOLS, TEXTS, TIMINGS, VALUES } from 'src/shared/const'
import { useNavigate, useRouteError } from 'react-router-dom'
import { handleRouteError } from 'src/shared/lib/handleRouteError.ts'
import { useCallback, useEffect, useState } from 'react'
import { addressApi } from 'src/pages/errorPage/api/addressApi.ts'

const date = Date()

const { userAgent, languages } = navigator

const {
    screen: { width, height },
} = window

const { characterSet, contentType, compatMode } = document

export const useErrorPage = () => {
    const lang = VALUES.EN
    const navigate = useNavigate()
    const routeError = useRouteError()
    const error = handleRouteError(routeError, lang)
    const [address, setAddress] = useState<string>()
    const [seconds, setSeconds] = useState<number>(TIMINGS.RESTART_SECONDS)
    const [isWaiting, setIsWaiting] = useState(false)

    const onRestart = useCallback(() => navigate(PATHS.ROOT), [navigate])

    useEffect(() => {
        if (!address) addressApi.getAddress().then(resolve => setAddress(resolve))

        const countdownId = setInterval(() => {
            if (seconds > 0) setSeconds(seconds - 1)
            else onRestart()
        }, TIMINGS.SECOND)

        const onWaiting = () => {
            clearInterval(countdownId)
            setIsWaiting(true)
        }

        const onKeyDown = ({ key }: KeyboardEvent) => {
            if (key === KEYS.ENTER) onRestart()
            if (key === KEYS.ESCAPE) onWaiting()
        }

        addEventListener(EVENTS.KEY_DOWN, onKeyDown)

        return () => {
            clearInterval(countdownId)
            removeEventListener(EVENTS.KEY_DOWN, onKeyDown)
        }
    }, [address, onRestart, seconds])

    return {
        onRestart,
        isWaiting,
        messages: [
            `${TEXTS[lang].APP_NAME} ${VALUES.VERSION} ${VALUES.BUILD}`,
            date,
            userAgent,
            `${width}${SYMBOLS.MULTIPLY}${height}, ${characterSet}, ${contentType}, ${compatMode}, ${languages.join(VALUES.COMMA_SPACE)}`,
            address,
            error,
            TEXTS[lang].RESTART_APP,
            !isWaiting && `${TEXTS[lang].AUTO_RESTART} ${seconds}`,
        ],
    }
}
