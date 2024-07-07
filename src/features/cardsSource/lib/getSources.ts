import { TEXTS, VALUES } from 'src/shared/const'
import { Lang } from 'src/shared/types/language.ts'
import { Source } from 'src/features/cardsSource/model/cardsSource.types.ts'
import { SOURCES } from 'src/features/cardsSource/const/sources.ts'

export const getSources = (lang: Lang = VALUES.EN): Source[] => [
    {
        label: TEXTS[lang].OFFICIAL_CARDS,
        value: SOURCES.OFFICIAL,
    },
    {
        label: TEXTS[lang].CUSTOM_CARDS,
        value: SOURCES.CUSTOM,
    },
]
