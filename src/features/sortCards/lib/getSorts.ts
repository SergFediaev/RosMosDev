import { Sort, SORTS } from 'src/features/sortCards'
import { TEXTS, VALUES } from 'src/shared/const'
import { Lang } from 'src/shared/types/language.ts'

export const getSorts = (lang: Lang = VALUES.EN): Sort[] => [
    {
        label: TEXTS[lang].SORT_ALPHABET_ASCENDING,
        value: {
            sortBy: SORTS.ALPHABET,
            sortDirection: SORTS.ASCENDING,
        },
    },
    {
        label: TEXTS[lang].SORT_ALPHABET_DESCENDING,
        value: {
            sortBy: SORTS.ALPHABET,
            sortDirection: SORTS.DESCENDING,
        },
    },
]
