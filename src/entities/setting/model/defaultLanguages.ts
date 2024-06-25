import { Language } from 'src/shared/types/language.ts'
import { EMOJIS, TEXTS, VALUES } from 'src/shared/const'

export const defaultLanguages: Language[] = [
    {
        label: `${EMOJIS.EN} ${TEXTS[VALUES.EN].ENGLISH}`,
        value: VALUES.EN,
    },
    {
        label: `${EMOJIS.RU} ${TEXTS[VALUES.EN].RUSSIAN}`,
        value: VALUES.RU,
    },
]
