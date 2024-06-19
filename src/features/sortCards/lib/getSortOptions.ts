import { Lang } from 'src/shared/types/lang.ts'
import { Options } from 'src/shared/ui/select/select.tsx'
import { Sort, SORTS } from 'src/features/sortCards'
import { TEXTS } from 'src/shared/const'

export const getSortOptions = (lang: Lang): Options<Sort> => [
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
