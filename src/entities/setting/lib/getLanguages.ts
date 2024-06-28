import { Lang, Language } from 'src/shared/types/language.ts'
import { EMOJIS, TEXTS, VALUES } from 'src/shared/const'

export const getLanguages = (lang: Lang = VALUES.EN): Language[] => [
    {
        label: `${EMOJIS.EN} ${TEXTS[lang].ENGLISH}`,
        value: VALUES.EN,
    },
    {
        label: `${EMOJIS.RU} ${TEXTS[lang].RUSSIAN}`,
        value: VALUES.RU,
    },
]
