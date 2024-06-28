import { TEXTS, VALUES } from 'src/shared/const'
import { Filter, FILTERS } from 'src/features/filterCards'
import { Lang } from 'src/shared/types/language.ts'

export const getFilters = (lang: Lang = VALUES.EN): Filter[] => [
    {
        label: TEXTS[lang].ALL,
        value: FILTERS.ALL,
    },
    {
        label: TEXTS[lang].UNCATEGORIZED,
        value: FILTERS.UNCATEGORIZED,
    },
]
