import { Sort, SORTS } from 'src/features/sortCards'
import { TEXTS, VALUES } from 'src/shared/const'

export const defaultSorts: Sort[] = [
    {
        label: TEXTS[VALUES.EN].SORT_ALPHABET_ASCENDING,
        value: {
            sortBy: SORTS.ALPHABET,
            sortDirection: SORTS.ASCENDING,
        },
    },
    {
        label: TEXTS[VALUES.EN].SORT_ALPHABET_DESCENDING,
        value: {
            sortBy: SORTS.ALPHABET,
            sortDirection: SORTS.DESCENDING,
        },
    },
]
