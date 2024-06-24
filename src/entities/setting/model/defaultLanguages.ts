import { Language } from 'src/shared/types/language.ts'
import { TEXTS, VALUES } from 'src/shared/const'

export const defaultLanguages: Language[] = [
    {
        label: TEXTS[VALUES.EN].ENGLISH,
        value: VALUES.EN,
    },
    {
        label: TEXTS[VALUES.EN].RUSSIAN,
        value: VALUES.RU,
    },
]
